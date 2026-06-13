const featureCards = document.querySelectorAll(".feature-card");
const featureActions = document.querySelectorAll(".feature-action");
const openGenerator = document.querySelector("[data-open-generator]");
const backdrop = document.querySelector(".sheet-backdrop");
const closeSheet = document.querySelector(".close-sheet");
const modeLabel = document.querySelector("#modeLabel");
const generatorTitle = document.querySelector("#generatorTitle");
const modePills = document.querySelectorAll(".mode-pill");
const fileInput = document.querySelector("#avatarFile");
const preview = document.querySelector("#avatarPreview");
const sourceVideoPreview = document.querySelector("#sourceVideoPreview");
const uploader = document.querySelector(".uploader");
const uploadTitle = document.querySelector(".upload-title");
const uploadHint = document.querySelector(".upload-hint");
const scriptText = document.querySelector("#scriptText");
const generateButton = document.querySelector(".generate-button");
const progressBox = document.querySelector(".progress-box");
const progressBar = document.querySelector("#progressBar");
const progressValue = document.querySelector("#progressValue");
const statusCopy = document.querySelector(".sheet-status");
const voiceChips = document.querySelectorAll(".voice-chip");
const tabItems = document.querySelectorAll(".tab-item");
const toast = document.querySelector(".toast");
const resultPanel = document.querySelector(".result-panel");
const resultVideo = document.querySelector("#resultVideo");
const downloadVideo = document.querySelector("#downloadVideo");
const auditionButton = document.querySelector("#auditionVoice");
const historyBackdrop = document.querySelector(".history-backdrop");
const closeHistory = document.querySelector(".close-history");
const historyList = document.querySelector("#historyList");

const modeTitle = {
  图生口播: "上传照片生成数字人口播视频",
  图生歌声: "上传照片生成数字人唱歌视频",
  图生舞蹈: "上传照片生成数字人舞蹈视频",
  视频生口播: "上传视频生成数字人口播视频"
};

const modeUploadCopy = {
  图生口播: ["上传正脸照片", "JPG / PNG，建议清晰半身照", "image/*"],
  图生歌声: ["上传演唱照片", "JPG / PNG，适合人物半身照", "image/*"],
  图生舞蹈: ["上传人物照片", "JPG / PNG，站姿或半身照都可以", "image/*"],
  视频生口播: ["上传视频或封面图", "支持视频素材，也可上传图片生成", "video/*,image/*"]
};

const state = {
  selectedMode: "图生口播",
  sourceFile: null,
  sourceUrl: "",
  outputUrl: "",
  isGenerating: false
};

let toastTimer;
let stars = createStars(90);

function setMode(mode) {
  state.selectedMode = mode;
  modeLabel.textContent = mode;
  generatorTitle.textContent = modeTitle[mode];

  const [title, hint, accept] = modeUploadCopy[mode];
  uploadTitle.textContent = title;
  uploadHint.textContent = hint;
  fileInput.accept = accept;

  featureCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.mode === mode);
  });

  modePills.forEach((pill) => {
    pill.classList.toggle("is-active", pill.dataset.mode === mode);
  });
}

function showSheet(mode = state.selectedMode) {
  setMode(mode);
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

function hideSheet() {
  backdrop.hidden = true;
  document.body.style.overflow = "";
}

function resetProgress() {
  progressBox.hidden = true;
  progressBar.style.width = "0%";
  progressValue.textContent = "0%";
}

function resetResult() {
  if (state.outputUrl) URL.revokeObjectURL(state.outputUrl);
  state.outputUrl = "";
  resultPanel.hidden = true;
  resultVideo.removeAttribute("src");
  downloadVideo.removeAttribute("href");
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 1800);
}

function updateProgress(percent, message) {
  const next = Math.max(0, Math.min(100, Math.round(percent)));
  progressBox.hidden = false;
  progressBar.style.width = `${next}%`;
  progressValue.textContent = `${next}%`;
  if (message) statusCopy.textContent = message;
}

featureCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    showSheet(card.dataset.mode);
  });
});

featureActions.forEach((button) => {
  button.addEventListener("click", (event) => {
    const card = event.currentTarget.closest(".feature-card");
    showSheet(card.dataset.mode);
  });
});

openGenerator.addEventListener("click", () => showSheet("图生口播"));
closeSheet.addEventListener("click", hideSheet);

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop && !state.isGenerating) hideSheet();
});

modePills.forEach((pill) => {
  pill.addEventListener("click", () => setMode(pill.dataset.mode));
});

voiceChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    voiceChips.forEach((item) => item.classList.remove("is-active"));
    chip.classList.add("is-active");
  });
});

fileInput.addEventListener("change", () => {
  const [file] = fileInput.files;
  resetProgress();
  resetResult();

  if (state.sourceUrl) URL.revokeObjectURL(state.sourceUrl);
  state.sourceFile = file || null;
  state.sourceUrl = file ? URL.createObjectURL(file) : "";

  preview.hidden = true;
  sourceVideoPreview.hidden = true;
  uploader.classList.remove("has-image");
  statusCopy.textContent = "";

  if (!file) return;

  if (file.type.startsWith("video/")) {
    sourceVideoPreview.src = state.sourceUrl;
    sourceVideoPreview.hidden = false;
    sourceVideoPreview.load();
  } else {
    preview.src = state.sourceUrl;
    preview.hidden = false;
  }

  uploader.classList.add("has-image");
  statusCopy.textContent = "素材已上传，可以开始生成数字人视频";
});

generateButton.addEventListener("click", async () => {
  if (state.isGenerating) return;

  if (!state.sourceFile) {
    statusCopy.textContent = "请先上传一张清晰照片或视频素材";
    showToast("请先上传素材");
    return;
  }

  if (!window.MediaRecorder || typeof document.createElement("canvas").captureStream !== "function") {
    statusCopy.textContent = "当前浏览器不支持本地视频生成，请换 Chrome 或 Edge";
    showToast("浏览器不支持生成");
    return;
  }

  resetResult();
  state.isGenerating = true;
  generateButton.disabled = true;
  generateButton.textContent = "生成中";
  updateProgress(2, "正在读取素材");

  try {
    const blob = await createDigitalHumanVideo({
      file: state.sourceFile,
      mode: state.selectedMode,
      script: scriptText.value.trim(),
      voice: selectedVoiceLabel(),
      onProgress: updateProgress
    });

    const filename = `星速数字人-${Date.now()}.webm`;
    state.outputUrl = URL.createObjectURL(blob);
    resultVideo.src = state.outputUrl;
    downloadVideo.href = state.outputUrl;
    downloadVideo.download = filename;
    resultPanel.hidden = false;

    await saveWork({
      id: createId(),
      blob,
      filename,
      mode: state.selectedMode,
      script: scriptText.value.trim(),
      voice: selectedVoiceLabel(),
      createdAt: Date.now()
    });

    updateProgress(100, "生成完成，可预览或下载视频");
    showToast("数字人视频已生成");
  } catch (error) {
    console.error(error);
    statusCopy.textContent = "生成失败，请换一张清晰素材后重试";
    showToast("生成失败");
  } finally {
    state.isGenerating = false;
    generateButton.disabled = false;
    generateButton.textContent = "重新生成";
  }
});

auditionButton.addEventListener("click", () => {
  speakScript(scriptText.value.trim(), selectedVoiceLabel());
});

tabItems.forEach((tab) => {
  tab.addEventListener("click", async () => {
    tabItems.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");

    if (tab.dataset.tab === "历史作品") {
      await openHistoryPanel();
      return;
    }

    if (tab.dataset.tab === "首页") {
      historyBackdrop.hidden = true;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    showToast(`${tab.dataset.tab} 已切换`);
  });
});

closeHistory.addEventListener("click", () => {
  historyBackdrop.hidden = true;
});

historyBackdrop.addEventListener("click", (event) => {
  if (event.target === historyBackdrop) historyBackdrop.hidden = true;
});

async function createDigitalHumanVideo({ file, mode, script, voice, onProgress }) {
  const source = await loadSource(file);
  const canvas = document.createElement("canvas");
  canvas.width = 720;
  canvas.height = 1280;
  const ctx = canvas.getContext("2d");
  const stream = canvas.captureStream(30);
  const mimeType = chooseMimeType();
  const chunks = [];
  const duration = getDurationMs(script, source);

  const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
  const done = new Promise((resolve, reject) => {
    recorder.addEventListener("dataavailable", (event) => {
      if (event.data && event.data.size) chunks.push(event.data);
    });
    recorder.addEventListener("stop", () => {
      resolve(new Blob(chunks, { type: recorder.mimeType || "video/webm" }));
    });
    recorder.addEventListener("error", () => reject(new Error("MediaRecorder failed")));
  });

  await startSource(source);
  recorder.start(250);
  const startedAt = performance.now();

  await new Promise((resolve) => {
    function draw(now) {
      const elapsed = now - startedAt;
      const progress = Math.min(1, elapsed / duration);
      drawVideoFrame(ctx, source, {
        mode,
        script,
        voice,
        progress,
        elapsed,
        duration
      });

      onProgress(8 + progress * 88, progress < 1 ? "正在渲染数字人视频" : "正在封装视频文件");

      if (progress < 1) {
        requestAnimationFrame(draw);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(draw);
  });

  recorder.stop();
  const blob = await done;
  stopSource(source);
  return blob;
}

async function loadSource(file) {
  if (file.type.startsWith("video/")) {
    const video = document.createElement("video");
    video.src = URL.createObjectURL(file);
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "auto";
    await waitForMedia(video, "loadedmetadata");
    return { type: "video", element: video, url: video.src, duration: video.duration || 8 };
  }

  const image = new Image();
  image.src = URL.createObjectURL(file);
  await waitForMedia(image, "load");
  return { type: "image", element: image, url: image.src, duration: 8 };
}

function waitForMedia(element, eventName) {
  return new Promise((resolve, reject) => {
    const cleanup = () => {
      element.removeEventListener(eventName, onLoad);
      element.removeEventListener("error", onError);
    };
    const onLoad = () => {
      cleanup();
      resolve();
    };
    const onError = () => {
      cleanup();
      reject(new Error("素材读取失败"));
    };
    element.addEventListener(eventName, onLoad, { once: true });
    element.addEventListener("error", onError, { once: true });
  });
}

async function startSource(source) {
  if (source.type !== "video") return;
  source.element.currentTime = 0;
  await source.element.play();
}

function stopSource(source) {
  if (source.type === "video") source.element.pause();
  if (source.url) URL.revokeObjectURL(source.url);
}

function drawVideoFrame(ctx, source, meta) {
  const { mode, script, voice, progress, elapsed, duration } = meta;
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const beat = Math.sin(elapsed / 110);
  const slow = Math.sin(elapsed / 760);

  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, "#030720");
  bg.addColorStop(0.48, "#071b62");
  bg.addColorStop(1, "#020411");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  drawStars(ctx, elapsed, w, h);
  drawLightTrails(ctx, elapsed, w, h);
  drawHeader(ctx, mode, voice, progress);
  drawAvatarStage(ctx, source, mode, beat, slow);
  drawAudioBars(ctx, mode, elapsed);
  drawSubtitle(ctx, script, progress);
  drawFooter(ctx, progress, duration);
}

function drawStars(ctx, elapsed, w, h) {
  ctx.save();
  for (const star of stars) {
    const twinkle = 0.35 + 0.65 * Math.abs(Math.sin(elapsed / star.speed + star.x));
    ctx.globalAlpha = star.alpha * twinkle;
    ctx.fillStyle = star.color;
    ctx.beginPath();
    ctx.arc(star.x * w, star.y * h, star.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawLightTrails(ctx, elapsed, w, h) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  for (let i = 0; i < 6; i += 1) {
    ctx.beginPath();
    ctx.lineWidth = 7 - i * 0.7;
    ctx.strokeStyle = i % 2 ? "rgba(114, 61, 255, 0.35)" : "rgba(38, 232, 255, 0.42)";
    ctx.moveTo(-80, 260 + i * 26);
    ctx.bezierCurveTo(210, 180 + i * 20, 420, 250 - i * 28, w + 90, 85 + i * 16 + Math.sin(elapsed / 540 + i) * 18);
    ctx.stroke();
  }
  ctx.restore();
}

function drawHeader(ctx, mode, voice, progress) {
  ctx.save();
  ctx.fillStyle = "rgba(4, 12, 42, 0.72)";
  roundedRect(ctx, 52, 48, 616, 96, 30);
  ctx.fill();
  ctx.strokeStyle = "rgba(85, 220, 255, 0.62)";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.font = "700 34px Microsoft YaHei, sans-serif";
  ctx.fillText("星速数字人", 84, 93);
  ctx.fillStyle = "#4defff";
  ctx.font = "600 22px Microsoft YaHei, sans-serif";
  ctx.fillText(`${mode} · ${voice}`, 84, 124);

  ctx.strokeStyle = "rgba(255,255,255,0.18)";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(612, 96, 28, -Math.PI / 2, Math.PI * 1.5);
  ctx.stroke();
  ctx.strokeStyle = "#2ff0ff";
  ctx.beginPath();
  ctx.arc(612, 96, 28, -Math.PI / 2, -Math.PI / 2 + progress * Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawAvatarStage(ctx, source, mode, beat, slow) {
  const x = 96;
  const y = 184;
  const width = 528;
  const height = 720;
  const lift = slow * 12;
  const scale = 1.025 + Math.abs(beat) * 0.01;

  ctx.save();
  ctx.shadowColor = mode === "图生歌声" ? "rgba(247, 68, 255, 0.9)" : "rgba(39, 229, 255, 0.9)";
  ctx.shadowBlur = 34;
  ctx.fillStyle = "rgba(6, 20, 70, 0.72)";
  roundedRect(ctx, x, y, width, height, 34);
  ctx.fill();
  ctx.strokeStyle = mode === "图生舞蹈" ? "rgba(43, 239, 218, 0.85)" : "rgba(88, 190, 255, 0.82)";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.clip();
  ctx.translate(width / 2 + x, height / 2 + y + lift);
  if (mode === "图生舞蹈") ctx.rotate(Math.sin(beat) * 0.018);
  ctx.scale(scale, scale);
  drawCover(ctx, source.element, -width / 2, -height / 2, width, height);
  ctx.restore();

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  const ringY = y + height - 42 + slow * 8;
  ctx.strokeStyle = "rgba(43, 237, 255, 0.72)";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.ellipse(x + width / 2, ringY, 210, 36, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = "rgba(143, 75, 255, 0.5)";
  ctx.beginPath();
  ctx.ellipse(x + width / 2, ringY + 10, 170, 24, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawAudioBars(ctx, mode, elapsed) {
  const baseX = 170;
  const baseY = 820;
  const color = mode === "图生歌声" ? "#ff58f1" : mode === "图生舞蹈" ? "#2ae6df" : "#27eaff";

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  for (let i = 0; i < 18; i += 1) {
    const height = 28 + Math.abs(Math.sin(elapsed / 95 + i * 0.82)) * 84;
    const x = baseX + i * 22;
    const grad = ctx.createLinearGradient(x, baseY - height, x, baseY);
    grad.addColorStop(0, "#ffffff");
    grad.addColorStop(0.35, color);
    grad.addColorStop(1, "rgba(20, 90, 255, 0.2)");
    ctx.fillStyle = grad;
    roundedRect(ctx, x, baseY - height, 9, height, 9);
    ctx.fill();
  }
  ctx.restore();
}

function drawSubtitle(ctx, script, progress) {
  const lines = getCaptionLines(script || "大家好，我是你的 AI 数字人。");
  const index = Math.min(lines.length - 1, Math.floor(progress * lines.length));
  const text = lines[index] || lines[0];

  ctx.save();
  ctx.fillStyle = "rgba(1, 6, 24, 0.74)";
  roundedRect(ctx, 56, 944, 608, 178, 28);
  ctx.fill();
  ctx.strokeStyle = "rgba(55, 230, 255, 0.45)";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#f7fbff";
  ctx.font = "700 34px Microsoft YaHei, sans-serif";
  drawWrappedText(ctx, text, 92, 1000, 536, 46, 2);

  ctx.fillStyle = "#43eaff";
  ctx.font = "600 22px Microsoft YaHei, sans-serif";
  ctx.fillText("AI 口播字幕", 92, 1090);
  ctx.restore();
}

function drawFooter(ctx, progress, duration) {
  ctx.save();
  ctx.fillStyle = "rgba(255,255,255,0.16)";
  roundedRect(ctx, 70, 1172, 580, 12, 12);
  ctx.fill();

  const grad = ctx.createLinearGradient(70, 0, 650, 0);
  grad.addColorStop(0, "#1b73ff");
  grad.addColorStop(0.55, "#33efff");
  grad.addColorStop(1, "#ff56f1");
  ctx.fillStyle = grad;
  roundedRect(ctx, 70, 1172, 580 * progress, 12, 12);
  ctx.fill();

  ctx.fillStyle = "rgba(230, 247, 255, 0.86)";
  ctx.font = "600 20px Microsoft YaHei, sans-serif";
  const current = Math.round((duration * progress) / 1000);
  ctx.fillText(`00:${String(current).padStart(2, "0")} / 00:${String(Math.round(duration / 1000)).padStart(2, "0")}`, 70, 1220);
  ctx.fillText("星速生成", 546, 1220);
  ctx.restore();
}

function drawCover(ctx, image, x, y, w, h) {
  const iw = image.videoWidth || image.naturalWidth || image.width;
  const ih = image.videoHeight || image.naturalHeight || image.height;
  const scale = Math.max(w / iw, h / ih);
  const sw = w / scale;
  const sh = h / scale;
  const sx = Math.max(0, (iw - sw) / 2);
  const sy = Math.max(0, (ih - sh) / 2);
  ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);
}

function roundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
  const chars = Array.from(text);
  const lines = [];
  let line = "";

  for (const char of chars) {
    const next = line + char;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);

  lines.slice(0, maxLines).forEach((item, index) => {
    ctx.fillText(item, x, y + index * lineHeight);
  });
}

function getCaptionLines(script) {
  const source = script.replace(/\s+/g, "");
  const chunks = [];
  for (let i = 0; i < source.length; i += 24) {
    chunks.push(source.slice(i, i + 24));
  }
  return chunks.length ? chunks : ["欢迎使用星速数字人"];
}

function getDurationMs(script, source) {
  const textDuration = Math.min(14000, Math.max(7000, (script.length || 24) * 150));
  if (source.type === "video") return Math.min(15000, Math.max(7000, source.duration * 1000));
  return textDuration;
}

function chooseMimeType() {
  const types = ["video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"];
  return types.find((type) => MediaRecorder.isTypeSupported(type)) || "";
}

function createStars(count) {
  return Array.from({ length: count }, () => ({
    x: Math.random(),
    y: Math.random() * 0.84,
    r: Math.random() * 1.8 + 0.6,
    alpha: Math.random() * 0.75 + 0.25,
    speed: Math.random() * 800 + 500,
    color: Math.random() > 0.72 ? "#9ef8ff" : "#ffffff"
  }));
}

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `work-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function selectedVoiceLabel() {
  return document.querySelector(".voice-chip.is-active")?.textContent.trim() || "清晰女声";
}

function speakScript(text, voiceLabel) {
  if (!("speechSynthesis" in window)) {
    showToast("当前浏览器不支持试听");
    return;
  }

  const content = text || "大家好，我是你的 AI 数字人。";
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(content);
  utterance.lang = "zh-CN";
  utterance.rate = voiceLabel === "活力主播" ? 1.12 : 0.96;
  utterance.pitch = voiceLabel === "沉稳男声" ? 0.82 : 1.06;

  const voices = window.speechSynthesis.getVoices();
  const zhVoice = voices.find((voice) => /zh|Chinese|中文/i.test(`${voice.lang} ${voice.name}`));
  if (zhVoice) utterance.voice = zhVoice;

  window.speechSynthesis.speak(utterance);
}

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("xingsu-digital-human", 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore("works", { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveWork(work) {
  const db = await openDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction("works", "readwrite");
    tx.objectStore("works").put(work);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

async function listWorks() {
  const db = await openDb();
  const works = await new Promise((resolve, reject) => {
    const tx = db.transaction("works", "readonly");
    const request = tx.objectStore("works").getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return works.sort((a, b) => b.createdAt - a.createdAt);
}

async function openHistoryPanel() {
  const works = await listWorks();
  historyList.innerHTML = "";
  historyBackdrop.hidden = false;

  if (!works.length) {
    historyList.innerHTML = '<p class="empty-history">还没有历史作品，先生成一个数字人视频吧。</p>';
    return;
  }

  works.forEach((work) => {
    const url = URL.createObjectURL(work.blob);
    const item = document.createElement("article");
    item.className = "history-item";
    item.innerHTML = `
      <video class="history-video" src="${url}" controls playsinline></video>
      <div class="history-meta">
        <strong>${work.mode}</strong>
        <span>${new Date(work.createdAt).toLocaleString("zh-CN")}</span>
        <a class="download-button compact" href="${url}" download="${work.filename}">下载视频</a>
      </div>
    `;
    historyList.appendChild(item);
  });
}

setMode(state.selectedMode);
