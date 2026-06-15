const featureCards = document.querySelectorAll(".feature-card");
const featureActions = document.querySelectorAll(".feature-action");
const openGeneratorButtons = document.querySelectorAll("[data-open-generator]");
const openCreationRecordsButton = document.querySelector("[data-open-creation-records]");
const openVoiceClonerButton = document.querySelector("[data-open-voice-cloner]");
const openTrainerButton = document.querySelector("[data-open-avatar-trainer]");
const backdrop = document.querySelector(".sheet-backdrop");
const closeSheet = document.querySelector(".close-sheet");
const modeLabel = document.querySelector("#modeLabel");
const generatorTitle = document.querySelector("#generatorTitle");
const fileInput = document.querySelector("#avatarFile");
const preview = document.querySelector("#avatarPreview");
const sourceVideoPreview = document.querySelector("#sourceVideoPreview");
const uploader = document.querySelector(".uploader");
const uploadTitle = document.querySelector(".upload-title");
const uploadHint = document.querySelector(".upload-hint");
const avatarSelectField = document.querySelector("#avatarSelectField");
const avatarSelectInput = document.querySelector("#avatarSelectInput");
const avatarSelectList = document.querySelector("#avatarSelectList");
const scriptField = document.querySelector("#scriptField");
const scriptFieldLabel = document.querySelector("#scriptFieldLabel");
const scriptText = document.querySelector("#scriptText");
const voicePanel = document.querySelector("#voicePanel");
const voiceOptions = document.querySelectorAll(".voice-option");
const selectedVoiceName = document.querySelector("#selectedVoiceName");
const audioLinkField = document.querySelector("#audioLinkField");
const audioLinkInput = document.querySelector("#audioLinkInput");
const audioPreview = document.querySelector("#audioPreview");
const audioExtractStatus = document.querySelector("#audioExtractStatus");
const motionField = document.querySelector("#motionField");
const motionVideoInput = document.querySelector("#motionVideoFile");
const motionVideoPreview = document.querySelector("#motionVideoPreview");
const motionStatus = document.querySelector("#motionStatus");
const generateButton = document.querySelector(".generate-button");
const progressBox = document.querySelector(".progress-box");
const progressBar = document.querySelector("#progressBar");
const progressValue = document.querySelector("#progressValue");
const statusCopy = document.querySelector(".sheet-status");
const ratioOptions = document.querySelectorAll(".ratio-option");
const durationChoices = document.querySelectorAll(".duration-choice");
const resolutionChoices = document.querySelectorAll(".resolution-choice");
const selectedRatioLabel = document.querySelector("#selectedRatioLabel");
const selectedDurationLabel = document.querySelector("#selectedDurationLabel");
const selectedResolutionLabel = document.querySelector("#selectedResolutionLabel");
const tabItems = document.querySelectorAll(".tab-item");
const toast = document.querySelector(".toast");
const resultPanel = document.querySelector(".result-panel");
const resultVideo = document.querySelector("#resultVideo");
const downloadVideo = document.querySelector("#downloadVideo");
const auditionButton = document.querySelector("#auditionVoice");
const historyBackdrop = document.querySelector(".history-backdrop");
const closeHistory = document.querySelector(".close-history");
const historyBackHome = document.querySelector(".history-back-home");
const historyList = document.querySelector("#historyList");
const minePage = document.querySelector(".mine-page");
const mineLogo = document.querySelector(".mine-logo");
const mineLoginButton = document.querySelector(".mine-login");
const authPage = document.querySelector(".auth-page");
const authBackButton = document.querySelector(".auth-back");
const authTabs = document.querySelectorAll(".auth-tab");
const authPanels = document.querySelectorAll("[data-auth-panel]");
const authAvatarInput = document.querySelector("#authAvatarInput");
const authAvatarPreview = document.querySelector("#authAvatarPreview");
const legalBackdrop = document.querySelector(".legal-backdrop");
const legalTitle = document.querySelector("#legalTitle");
const legalContent = document.querySelector("#legalContent");
const closeLegal = document.querySelector(".close-legal");
const supportPage = document.querySelector(".support-page");
const supportBack = document.querySelector(".support-back");
const supportRefresh = document.querySelector(".support-refresh");
const supportForm = document.querySelector(".support-form");
const supportTitle = document.querySelector("#supportTitle");
const supportContent = document.querySelector("#supportContent");
const supportImages = document.querySelector("#supportImages");
const supportUploadGrid = document.querySelector("#supportUploadGrid");
const pointsPage = document.querySelector(".points-page");
const pointsBack = document.querySelector(".points-back");
const pointsBalance = document.querySelector("#pointsBalance");
const pointsCodeInput = document.querySelector("#pointsCodeInput");
const pointsActivateButton = document.querySelector("#pointsActivateButton");
const keyPage = document.querySelector(".key-page");
const keyBack = document.querySelector(".key-back");
const keyStatusText = document.querySelector("#keyStatusText");
const keyStatusHint = document.querySelector("#keyStatusHint");
const keyCodeInput = document.querySelector("#keyCodeInput");
const keyActivateButton = document.querySelector("#keyActivateButton");
const trainerBackdrop = document.querySelector(".trainer-backdrop");
const closeTrainer = document.querySelector(".close-trainer");
const trainerCancel = document.querySelector(".trainer-cancel");
const trainerStart = document.querySelector(".trainer-start");
const trainerFileInput = document.querySelector("#trainerFile");
const trainerImagePreview = document.querySelector("#trainerImagePreview");
const trainerVideoPreview = document.querySelector("#trainerVideoPreview");
const trainerName = document.querySelector("#trainerName");
const trainerNote = document.querySelector("#trainerNote");
const trainerStatus = document.querySelector(".trainer-status");
const voiceCloneBackdrop = document.querySelector(".voice-clone-backdrop");
const closeVoiceClone = document.querySelector(".close-voice-clone");
const voiceCloneName = document.querySelector("#voiceCloneName");
const voiceCloneFileInput = document.querySelector("#voiceCloneFile");
const voiceClonePreview = document.querySelector("#voiceClonePreview");
const voiceCloneStatus = document.querySelector(".voice-clone-status");
const voiceSourceButtons = document.querySelectorAll(".voice-source-button");
const voiceUploadPanel = document.querySelector("#voiceUploadPanel");
const voiceRecordPanel = document.querySelector("#voiceRecordPanel");
const voiceRecordButton = document.querySelector(".voice-record-button");
const voiceCreateButton = document.querySelector(".voice-create-button");

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
  视频生口播: ["上传口播视频", "MP4 / MOV，自动提取人物首帧生成", "video/*"]
};

const state = {
  selectedMode: "图生口播",
  voice: "清晰女声",
  ttsVoice: "zh-CN-XiaoxiaoNeural",
  ratio: "9:16",
  duration: "5",
  resolution: "720P",
  audioLink: "",
  motionFile: null,
  motionUrl: "",
  avatars: [],
  selectedAvatarId: "",
  trainerFile: null,
  trainerUrl: "",
  clonedVoices: [],
  voiceCloneFile: null,
  voiceCloneUrl: "",
  voiceCloneSource: "upload",
  voiceRecorder: null,
  voiceRecordChunks: [],
  voiceRecordStream: null,
  sourceFile: null,
  sourceUrl: "",
  outputUrl: "",
  authAvatarUrl: localStorage.getItem("authAvatarUrl") || "",
  points: localStorage.getItem("pointsInitialized") === "1" ? Number(localStorage.getItem("userPoints") || 0) : 0,
  memberStatus: localStorage.getItem("memberStatus") || "未激活",
  activeCreation: null,
  isGenerating: false
};

const pointsCostByMode = {
  图生口播: 10,
  图生歌声: 20,
  图生舞蹈: 20,
  视频生口播: 15
};

const ratioDimensions = {
  "9:16": { width: 720, height: 1280 },
  "3:4": { width: 720, height: 960 },
  "1:1": { width: 720, height: 720 },
  "4:3": { width: 960, height: 720 },
  "16:9": { width: 1280, height: 720 }
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

  syncModeFields();
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

function syncModeFields() {
  const isTalkMode = state.selectedMode === "图生口播" || state.selectedMode === "视频生口播";
  const isSongMode = state.selectedMode === "图生歌声";
  const isDanceMode = state.selectedMode === "图生舞蹈";
  const isVideoTalkMode = state.selectedMode === "视频生口播";
  scriptField.hidden = isSongMode || isDanceMode;
  voicePanel.hidden = !isTalkMode;
  audioLinkField.hidden = !isSongMode;
  motionField.hidden = !isDanceMode;
  avatarSelectField.hidden = !isVideoTalkMode;
  auditionButton.hidden = isSongMode || isDanceMode;

  if (!isSongMode && !isDanceMode) {
    scriptFieldLabel.textContent = "口播文案";
  }
}

function syncAudioLink() {
  const link = audioLinkInput.value.trim();
  state.audioLink = link;

  if (!link) {
    audioPreview.hidden = true;
    audioPreview.removeAttribute("src");
    audioExtractStatus.textContent = "粘贴音频链接后将直接用于生成唱歌视频";
    return false;
  }

  try {
    const url = new URL(link);
    state.audioLink = url.href;
    audioPreview.src = url.href;
    audioPreview.hidden = false;
    audioExtractStatus.textContent = "音频链接已就绪，可以直接开始生成";
    return true;
  } catch (error) {
    audioPreview.hidden = true;
    audioPreview.removeAttribute("src");
    audioExtractStatus.textContent = "链接格式不正确，请重新粘贴";
    return false;
  }
}

function syncSettingControls() {
  document.querySelectorAll(".voice-option").forEach((option) => {
    option.classList.toggle("is-active", option.dataset.voice === state.voice);
  });
  ratioOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.ratio === state.ratio);
  });
  durationChoices.forEach((choice) => {
    choice.classList.toggle("is-active", choice.dataset.duration === state.duration);
  });
  resolutionChoices.forEach((choice) => {
    choice.classList.toggle("is-active", choice.dataset.resolution === state.resolution);
  });

  selectedVoiceName.textContent = state.voice;
  selectedRatioLabel.textContent = state.ratio;
  selectedDurationLabel.textContent = state.duration === "auto" ? "自定义" : `${state.duration}s`;
  selectedResolutionLabel.textContent = state.resolution;
  resultVideo.style.aspectRatio = state.ratio.replace(":", " / ");
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

openGeneratorButtons.forEach((button) => {
  button.addEventListener("click", () => showSheet("图生口播"));
});

openVoiceClonerButton.addEventListener("click", () => {
  showVoiceCloner();
});

openTrainerButton.addEventListener("click", () => {
  trainerBackdrop.hidden = false;
  trainerStatus.textContent = "";
  document.body.style.overflow = "hidden";
});

function hideTrainer() {
  trainerBackdrop.hidden = true;
  document.body.style.overflow = "";
}

closeTrainer.addEventListener("click", hideTrainer);
trainerCancel.addEventListener("click", hideTrainer);
trainerBackdrop.addEventListener("click", (event) => {
  if (event.target === trainerBackdrop) hideTrainer();
});

closeSheet.addEventListener("click", hideSheet);

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop && !state.isGenerating) hideSheet();
});

voicePanel.addEventListener("click", (event) => {
  const option = event.target.closest(".voice-option");
  if (!option) return;

  if (option.dataset.clonePlaceholder === "true") {
    const [latestVoice] = state.clonedVoices;
    if (latestVoice) {
      state.voice = latestVoice.name;
      state.ttsVoice = "clone";
      state.clonedVoiceId = latestVoice.id;
      selectedVoiceName.textContent = latestVoice.name;
      syncSettingControls();
      showToast(`已选择 ${latestVoice.name}`);
    } else {
      showVoiceCloner();
      voiceCloneStatus.textContent = "请先创建一个我的克隆音色";
    }
    return;
  }

  state.voice = option.dataset.voice;
  state.ttsVoice = option.dataset.ttsVoice;
  state.clonedVoiceId = option.dataset.cloneId || "";
  syncSettingControls();
});

function showVoiceCloner() {
  voiceCloneBackdrop.hidden = false;
  voiceCloneStatus.textContent = "";
  document.body.style.overflow = "hidden";
}

function hideVoiceCloner() {
  voiceCloneBackdrop.hidden = true;
  document.body.style.overflow = "";
}

closeVoiceClone.addEventListener("click", hideVoiceCloner);
voiceCloneBackdrop.addEventListener("click", (event) => {
  if (event.target === voiceCloneBackdrop) hideVoiceCloner();
});

voiceSourceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.voiceCloneSource = button.dataset.voiceSource;
    voiceSourceButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    voiceUploadPanel.hidden = state.voiceCloneSource !== "upload";
    voiceRecordPanel.hidden = state.voiceCloneSource !== "record";
  });
});

voiceCloneFileInput.addEventListener("change", () => {
  const [file] = voiceCloneFileInput.files;
  setVoiceCloneFile(file || null);
});

voiceRecordButton.addEventListener("click", async () => {
  if (state.voiceRecorder && state.voiceRecorder.state === "recording") {
    state.voiceRecorder.stop();
    voiceRecordButton.textContent = "开始录音";
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.voiceRecordStream = stream;
    state.voiceRecordChunks = [];
    const recorder = new MediaRecorder(stream);
    state.voiceRecorder = recorder;
    recorder.addEventListener("dataavailable", (event) => {
      if (event.data && event.data.size) state.voiceRecordChunks.push(event.data);
    });
    recorder.addEventListener("stop", () => {
      const blob = new Blob(state.voiceRecordChunks, { type: recorder.mimeType || "audio/webm" });
      const file = new File([blob], `recorded-voice-${Date.now()}.webm`, { type: blob.type });
      setVoiceCloneFile(file);
      stream.getTracks().forEach((track) => track.stop());
      state.voiceRecordStream = null;
      voiceCloneStatus.textContent = "录音已完成，可以创建音色";
    });
    recorder.start();
    voiceRecordButton.textContent = "停止录音";
    voiceCloneStatus.textContent = "正在录音...";
  } catch (error) {
    console.error(error);
    voiceCloneStatus.textContent = "无法打开麦克风，请改用上传文件";
  }
});

voiceCreateButton.addEventListener("click", async () => {
  if (!voiceCloneName.value.trim()) {
    voiceCloneStatus.textContent = "请先填写音色名称";
    return;
  }
  if (!state.voiceCloneFile) {
    voiceCloneStatus.textContent = "请先上传或录制一段清晰人声";
    return;
  }

  voiceCreateButton.disabled = true;
  voiceCloneStatus.textContent = "正在用 IndexTTS-2 创建克隆音色...";

  try {
    const previewBlob = await createVoiceClonePreview(state.voiceCloneFile, voiceCloneName.value.trim());
    const voice = {
      id: createId(),
      name: voiceCloneName.value.trim(),
      blob: state.voiceCloneFile,
      filename: state.voiceCloneFile.name,
      type: state.voiceCloneFile.type,
      previewBlob,
      model: "IndexTTS-2",
      status: "ready",
      createdAt: Date.now()
    };
    await saveVoice(voice);
    addClonedVoiceOption(voice);
    state.voice = voice.name;
    state.ttsVoice = "clone";
    state.clonedVoiceId = voice.id;
    syncSettingControls();
    if (state.voiceCloneUrl) URL.revokeObjectURL(state.voiceCloneUrl);
    state.voiceCloneUrl = URL.createObjectURL(previewBlob);
    voiceClonePreview.src = state.voiceCloneUrl;
    voiceClonePreview.hidden = false;
    voiceCloneStatus.textContent = "创建完成，已加入选择音色";
    showToast("克隆音色已创建");
    setTimeout(() => {
      hideVoiceCloner();
      showSheet("图生口播");
    }, 700);
  } catch (error) {
    console.error(error);
    voiceCloneStatus.textContent = "创建失败，请换一段更清晰的人声重试";
  } finally {
    voiceCreateButton.disabled = false;
  }
});

avatarSelectInput.addEventListener("click", () => {
  renderAvatarList();
  avatarSelectList.hidden = false;
});

avatarSelectList.addEventListener("click", (event) => {
  const option = event.target.closest(".avatar-select-option");
  if (!option) return;
  const avatar = state.avatars.find((item) => item.id === option.dataset.avatarId);
  if (!avatar) return;

  state.selectedAvatarId = avatar.id;
  avatarSelectInput.value = avatar.name;
  avatarSelectList.hidden = true;
  useSourceFile(avatar.blob, `${avatar.name} 已选为当前数字人，可直接生成口播视频`);
  showToast(`已选择 ${avatar.name}`);
});

document.addEventListener("click", (event) => {
  if (!avatarSelectField.contains(event.target)) avatarSelectList.hidden = true;
});

ratioOptions.forEach((option) => {
  option.addEventListener("click", () => {
    state.ratio = option.dataset.ratio;
    syncSettingControls();
  });
});

durationChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    state.duration = choice.dataset.duration;
    syncSettingControls();
  });
});

resolutionChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    state.resolution = choice.dataset.resolution;
    syncSettingControls();
  });
});

audioLinkInput.addEventListener("input", syncAudioLink);

motionVideoInput.addEventListener("change", () => {
  const [file] = motionVideoInput.files;
  if (state.motionUrl) URL.revokeObjectURL(state.motionUrl);
  state.motionFile = file || null;
  state.motionUrl = file ? URL.createObjectURL(file) : "";

  motionVideoPreview.hidden = true;
  motionVideoPreview.removeAttribute("src");

  if (!file) {
    motionStatus.textContent = "上传跳舞视频后，图片人物会学习视频动作并生成舞蹈视频";
    return;
  }

  motionVideoPreview.src = state.motionUrl;
  motionVideoPreview.hidden = false;
  motionVideoPreview.load();
  motionStatus.textContent = "跳舞视频已上传，可以开始生成动作迁移视频";
});

trainerFileInput.addEventListener("change", () => {
  const [file] = trainerFileInput.files;
  if (state.trainerUrl) URL.revokeObjectURL(state.trainerUrl);
  state.trainerFile = file || null;
  state.trainerUrl = file ? URL.createObjectURL(file) : "";

  trainerImagePreview.hidden = true;
  trainerVideoPreview.hidden = true;
  trainerImagePreview.removeAttribute("src");
  trainerVideoPreview.removeAttribute("src");
  trainerStatus.textContent = "";

  if (!file) return;

  if (file.type.startsWith("video/")) {
    trainerVideoPreview.src = state.trainerUrl;
    trainerVideoPreview.hidden = false;
    trainerVideoPreview.load();
  } else {
    trainerImagePreview.src = state.trainerUrl;
    trainerImagePreview.hidden = false;
  }
});

trainerStart.addEventListener("click", async () => {
  if (!state.trainerFile) {
    trainerStatus.textContent = "请先选择一张图片或一段视频";
    return;
  }
  if (!trainerName.value.trim()) {
    trainerStatus.textContent = "请先填写数字人名称";
    return;
  }

  trainerStart.disabled = true;
  trainerStatus.textContent = "正在训练专属数字人形象...";

  try {
    const avatar = {
      id: createId(),
      name: trainerName.value.trim(),
      note: trainerNote.value.trim(),
      blob: state.trainerFile,
      filename: state.trainerFile.name,
      type: state.trainerFile.type,
      model: "Wan2.2-S2V",
      status: "ready",
      createdAt: Date.now()
    };
    await saveAvatar(avatar);
    state.avatars = state.avatars.filter((item) => item.id !== avatar.id).concat(avatar);
    useSourceFile(state.trainerFile, `${avatar.name} 已设为当前专属数字人，可直接生成口播视频`);
    trainerStatus.textContent = "训练完成，已保存为专属数字人";
    showToast("数字人训练完成");
    setTimeout(() => {
      hideTrainer();
      showSheet("图生口播");
    }, 700);
  } catch (error) {
    console.error(error);
    trainerStatus.textContent = "训练失败，请换一份清晰素材重试";
  } finally {
    trainerStart.disabled = false;
  }
});

fileInput.addEventListener("change", () => {
  const [file] = fileInput.files;
  useSourceFile(file, "素材已上传，可以开始生成数字人视频");
});

function useSourceFile(file, message) {
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
  statusCopy.textContent = message;
}

generateButton.addEventListener("click", async () => {
  if (state.isGenerating) return;

  if (!state.sourceFile) {
    statusCopy.textContent = "请先上传一张清晰照片或视频素材";
    showToast("请先上传素材");
    return;
  }

  if (state.selectedMode === "图生歌声" && !syncAudioLink()) {
    statusCopy.textContent = "请先粘贴正确的音频链接";
    showToast("请先粘贴音频链接");
    return;
  }

  if (state.selectedMode === "图生舞蹈" && !state.motionFile) {
    statusCopy.textContent = "请先上传一段跳舞视频";
    showToast("请先上传跳舞视频");
    return;
  }

  if ((state.selectedMode === "图生口播" || state.selectedMode === "视频生口播") && !scriptText.value.trim()) {
    statusCopy.textContent = "请先填写口播文案";
    showToast("请先填写口播文案");
    return;
  }

  if (!["图生口播", "图生歌声", "图生舞蹈", "视频生口播"].includes(state.selectedMode) && (!window.MediaRecorder || typeof document.createElement("canvas").captureStream !== "function")) {
    statusCopy.textContent = "当前浏览器不支持本地视频生成，请换 Chrome 或 Edge";
    showToast("浏览器不支持生成");
    return;
  }

  const pointsCost = pointsCostByMode[state.selectedMode] || 0;
  if (state.points < pointsCost) {
    statusCopy.textContent = `积分不足，本次生成需要 ${pointsCost} 积分`;
    showToast("积分不足，请先兑换积分");
    openPointsPage();
    return;
  }
  state.points -= pointsCost;
  syncPointsBalance();

  resetResult();
  state.isGenerating = true;
  state.activeCreation = {
    id: createId(),
    mode: state.selectedMode,
    script: state.selectedMode === "图生歌声" ? state.audioLink : state.selectedMode === "图生舞蹈" && state.motionFile ? state.motionFile.name : scriptText.value.trim(),
    voice: selectedVoiceLabel(),
    ratio: state.ratio,
    duration: selectedDurationLabel.textContent,
    resolution: state.resolution,
    status: "generating",
    statusText: "正在生成视频",
    createdAt: Date.now()
  };
  refreshCreationPanelIfOpen();
  generateButton.disabled = true;
  generateButton.textContent = "生成中";
  updateProgress(2, "正在读取素材");

  try {
    const isSongMode = state.selectedMode === "图生歌声";
    const isDanceMode = state.selectedMode === "图生舞蹈";
    const isTalkMode = state.selectedMode === "图生口播";
    const isVideoTalkMode = state.selectedMode === "视频生口播";
    const blob = isTalkMode || isVideoTalkMode
      ? await createTalkingVideoWithWan({
          file: isVideoTalkMode ? await createReferenceImageFromVideo(state.sourceFile) : state.sourceFile,
          script: scriptText.value.trim(),
          voice: state.ttsVoice,
          cloneVoice: getSelectedCloneVoice(),
          resolution: state.resolution,
          onProgress: updateProgress
        })
      : isSongMode
      ? await createSingingVideoWithWan({
          file: state.sourceFile,
          audioUrl: state.audioLink,
          resolution: state.resolution,
          onProgress: updateProgress
        })
      : isDanceMode
        ? await createDanceVideoWithWanAnimate({
            imageFile: state.sourceFile,
            motionFile: state.motionFile,
            duration: state.duration,
            resolution: state.resolution,
            onProgress: updateProgress
          })
      : await createDigitalHumanVideo({
          file: state.sourceFile,
          mode: state.selectedMode,
          script: scriptText.value.trim(),
          voice: selectedVoiceLabel(),
          ratio: state.ratio,
          durationSeconds: state.duration,
          resolution: state.resolution,
          onProgress: updateProgress
        });

    const filename = `星速数字人-${Date.now()}.${blob.type.includes("mp4") ? "mp4" : "webm"}`;
    state.outputUrl = URL.createObjectURL(blob);
    resultVideo.src = state.outputUrl;
    downloadVideo.href = state.outputUrl;
    downloadVideo.download = filename;
    resultPanel.hidden = false;

    const completedWork = {
      ...state.activeCreation,
      blob,
      filename,
      mode: state.selectedMode,
      script: isSongMode ? state.audioLink : isDanceMode ? state.motionFile.name : scriptText.value.trim(),
      voice: selectedVoiceLabel(),
      audioLink: state.audioLink,
      motionVideo: isDanceMode ? state.motionFile.name : "",
      ratio: state.ratio,
      duration: selectedDurationLabel.textContent,
      resolution: state.resolution,
      status: "success",
      statusText: "创作成功",
      createdAt: Date.now()
    };
    state.activeCreation = null;
    await saveWork(completedWork);
    refreshCreationPanelIfOpen();

    updateProgress(100, isTalkMode || isVideoTalkMode ? "Wan2.2-S2V 口播视频生成完成" : isSongMode ? "Wan2.2-S2V 唱歌视频生成完成" : isDanceMode ? "Wan2.2-Animate 动作迁移视频生成完成" : "生成完成，可预览或下载视频");
    showToast("数字人视频已生成");
  } catch (error) {
    console.error(error);
    if (state.activeCreation) {
      state.activeCreation.status = "failed";
      state.activeCreation.statusText = "创作失败";
      refreshCreationPanelIfOpen();
    }
    statusCopy.textContent = error.message || "生成失败，请换一张清晰素材后重试";
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
    if (authPage) authPage.hidden = true;
    if (supportPage) supportPage.hidden = true;
    if (pointsPage) pointsPage.hidden = true;
    if (keyPage) keyPage.hidden = true;
    if (legalBackdrop) legalBackdrop.hidden = true;

    if (tab.dataset.tab === "创作记录") {
      minePage.hidden = true;
      await openCreationPanel();
      return;
    }

    if (tab.dataset.tab === "首页") {
      minePage.hidden = true;
      historyBackdrop.hidden = true;
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (tab.dataset.tab === "我的") {
      historyBackdrop.hidden = true;
      minePage.hidden = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    showToast(`${tab.dataset.tab} 已切换`);
  });
});

openCreationRecordsButton?.addEventListener("click", async () => {
  tabItems.forEach((item) => item.classList.toggle("is-active", item.dataset.tab === "创作记录"));
  minePage.hidden = true;
  if (authPage) authPage.hidden = true;
  if (supportPage) supportPage.hidden = true;
  if (pointsPage) pointsPage.hidden = true;
  if (keyPage) keyPage.hidden = true;
  await openCreationPanel();
});

minePage.addEventListener("click", (event) => {
  const action = event.target.closest("[data-mine-action]");
  if (!action) return;
  if (action.dataset.mineAction === "用户协议") {
    openLegalPanel("用户协议");
    return;
  }
  if (action.dataset.mineAction === "隐私政策") {
    openLegalPanel("隐私政策");
    return;
  }
  if (action.dataset.mineAction === "在线客服") {
    openSupportPage();
    return;
  }
  if (action.dataset.mineAction === "我的积分") {
    openPointsPage();
    return;
  }
  if (action.dataset.mineAction === "密钥激活") {
    openKeyPage();
    return;
  }
  showToast(`${action.dataset.mineAction} 即将开放`);
});

const legalDocs = {
  用户协议: `
    <p>欢迎使用星速 AI 数字人视频工具。本协议用于说明您在使用图生口播、图生唱歌、图生舞蹈、视频生口播、定制数字人、克隆音色、创作记录等功能时的权利与义务。</p>
    <h3>1. 账号与使用</h3>
    <p>您应使用真实、合法、有效的信息注册和登录，并妥善保管账号、验证码、密码及设备。因您主动泄露或授权他人使用账号产生的操作，由您自行承担相应责任。</p>
    <h3>2. 素材上传与授权</h3>
    <p>您上传的人物图片、视频、音频、口播文案、歌曲音频、跳舞参考视频、头像和截图，应当由您本人拥有合法权利或已获得权利人授权。您授权本软件在提供生成、训练、预览、保存、下载等服务范围内处理这些素材。</p>
    <h3>3. 数字人和音色克隆</h3>
    <p>定制数字人、克隆音色等功能仅可用于合法合规用途。未经本人明确同意，不得上传他人的肖像、声音、身份信息或使用生成内容冒充他人、误导公众、实施诈骗、侵权营销或其他违法违规行为。</p>
    <h3>4. 内容规范</h3>
    <p>您不得生成、上传、传播违法违规、侵犯他人隐私和知识产权、虚假欺诈、低俗暴力、恶意诽谤或可能危害未成年人权益的内容。平台有权对违规内容限制生成、删除记录、暂停服务或依法配合主管部门处理。</p>
    <h3>5. 创作记录与下载</h3>
    <p>生成成功的视频会显示在创作记录中，您可以通过浏览器下载。请您自行确认生成内容的使用场景、授权范围和发布责任。</p>
    <h3>6. 服务变更</h3>
    <p>由于模型能力、网络、设备、浏览器或第三方服务变化，部分功能可能调整、暂停或产生等待时间。我们会尽量保持服务稳定，但不承诺所有生成结果完全符合预期。</p>
    <h3>7. 免责声明</h3>
    <p>您因违反法律法规、侵犯第三方权益或超出授权范围使用素材和生成内容产生的争议，由您自行承担责任。平台将在合理范围内提供必要协助。</p>
  `,
  隐私政策: `
    <p>本隐私政策说明本软件在提供 AI 数字人视频创作服务时如何处理您的信息。我们会尽量减少不必要的信息收集，并只在实现功能所需范围内使用。</p>
    <h3>1. 我们可能处理的信息</h3>
    <p>账号登录信息：手机号、验证码、密码状态、登录状态等。</p>
    <p>创作素材：您上传的人物图片、视频、音频链接、歌曲音频、跳舞视频、口播文案、头像、数字人训练素材、克隆音色样本和客服截图。</p>
    <p>创作结果：生成任务状态、创作记录、生成视频、下载文件名、创建时间等。</p>
    <h3>2. 信息使用目的</h3>
    <p>我们使用上述信息用于账号注册登录、头像展示、数字人训练、音色克隆、视频生成、创作记录展示、下载视频、问题反馈处理和服务安全维护。</p>
    <h3>3. 本地保存</h3>
    <p>当前网页版本会把头像、克隆音色、数字人资产和创作记录保存在浏览器本地存储或 IndexedDB 中，用于下次打开时继续使用。清理浏览器数据可能会删除这些内容。</p>
    <h3>4. 上传与第三方模型</h3>
    <p>当您点击生成、训练或克隆时，相关素材可能会提交到本地服务或接入的 AI 模型服务进行处理。我们会按功能需要传输必要数据，不会主动将您的素材用于与本功能无关的用途。</p>
    <h3>5. 您的权利</h3>
    <p>您可以自行删除浏览器本地数据，或在功能内替换头像、重新上传素材。后续接入正式账号系统后，将补充账号注销、数据删除、撤回授权等入口。</p>
    <h3>6. 未成年人保护</h3>
    <p>未成年人使用本软件应取得监护人同意。不得上传未成年人肖像、声音或其他敏感信息用于不当生成或公开传播。</p>
    <h3>7. 联系我们</h3>
    <p>如您对账号、素材、生成内容、隐私或客服反馈有疑问，可通过“我的 - 在线客服”提交问题和截图，我们会根据反馈内容进行处理。</p>
  `
};

function openLegalPanel(type) {
  if (!legalBackdrop) return;
  legalTitle.textContent = type;
  legalContent.innerHTML = legalDocs[type] || "";
  legalBackdrop.hidden = false;
}

function closeLegalPanel() {
  if (legalBackdrop) legalBackdrop.hidden = true;
}

function openSupportPage() {
  if (!supportPage) return;
  historyBackdrop.hidden = true;
  minePage.hidden = true;
  authPage.hidden = true;
  supportPage.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeSupportPage() {
  if (!supportPage) return;
  supportPage.hidden = true;
  minePage.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function syncPointsBalance() {
  if (pointsBalance) pointsBalance.textContent = String(state.points);
  localStorage.setItem("pointsInitialized", "1");
  localStorage.setItem("userPoints", String(state.points));
}

function openPointsPage() {
  if (!pointsPage) return;
  historyBackdrop.hidden = true;
  minePage.hidden = true;
  authPage.hidden = true;
  supportPage.hidden = true;
  pointsPage.hidden = false;
  syncPointsBalance();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closePointsPage() {
  if (!pointsPage) return;
  pointsPage.hidden = true;
  minePage.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function syncKeyStatus() {
  if (keyStatusText) keyStatusText.textContent = state.memberStatus;
  if (keyStatusHint) {
    keyStatusHint.textContent = state.memberStatus === "未激活"
      ? "输入 CDK 激活码后可开通对应会员服务。"
      : "会员服务已开通，后续升级可继续叠加。";
  }
  localStorage.setItem("memberStatus", state.memberStatus);
}

function openKeyPage() {
  if (!keyPage) return;
  historyBackdrop.hidden = true;
  minePage.hidden = true;
  authPage.hidden = true;
  supportPage.hidden = true;
  pointsPage.hidden = true;
  keyPage.hidden = false;
  syncKeyStatus();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeKeyPage() {
  if (!keyPage) return;
  keyPage.hidden = true;
  minePage.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showAuthPanel(panelName = "login") {
  authTabs.forEach((tab) => {
    const isActive = tab.dataset.authTab === panelName;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
  authPanels.forEach((panel) => {
    panel.hidden = panel.dataset.authPanel !== panelName;
  });
  syncAuthAvatarPreview();
}

function openAuthPage(panelName = "login") {
  if (!authPage) return;
  historyBackdrop.hidden = true;
  minePage.hidden = true;
  authPage.hidden = false;
  showAuthPanel(panelName);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeAuthPage() {
  if (!authPage) return;
  authPage.hidden = true;
  minePage.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function syncAuthAvatarPreview() {
  if (!authAvatarPreview) return;
  if (state.authAvatarUrl) {
    authAvatarPreview.src = state.authAvatarUrl;
    authAvatarPreview.hidden = false;
    mineLogo?.classList.add("has-avatar");
    mineLogo?.style.setProperty("--avatar-url", `url("${state.authAvatarUrl}")`);
  } else {
    authAvatarPreview.removeAttribute("src");
    authAvatarPreview.hidden = true;
    mineLogo?.classList.remove("has-avatar");
    mineLogo?.style.removeProperty("--avatar-url");
  }
}

function fileToAvatarDataUrl(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const reader = new FileReader();
    reader.onload = () => {
      image.onload = () => {
        const size = 360;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        const minSide = Math.min(image.width, image.height);
        const sx = (image.width - minSide) / 2;
        const sy = (image.height - minSide) / 2;
        ctx.drawImage(image, sx, sy, minSide, minSide, 0, 0, size, size);
        resolve(canvas.toDataURL("image/jpeg", 0.86));
      };
      image.onerror = reject;
      image.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

mineLoginButton?.addEventListener("click", () => {
  openAuthPage("login");
});

authBackButton?.addEventListener("click", closeAuthPage);

authTabs.forEach((tab) => {
  tab.addEventListener("click", () => showAuthPanel(tab.dataset.authTab));
});

authPage?.addEventListener("click", (event) => {
  if (event.target.closest(".auth-avatar-picker")) {
    return;
  }

  const eyeButton = event.target.closest(".auth-eye");
  if (eyeButton) {
    const field = eyeButton.closest(".auth-field")?.querySelector("input");
    if (field) {
      field.type = field.type === "password" ? "text" : "password";
      eyeButton.classList.toggle("is-visible", field.type === "text");
    }
    return;
  }

  if (event.target.closest(".auth-code-button")) {
    showToast("验证码已发送");
    return;
  }

  if (event.target.closest(".auth-other")) {
    showToast("其他登录方式即将开放");
  }
});

authAvatarInput?.addEventListener("change", async () => {
  const [file] = authAvatarInput.files || [];
  if (!file) return;
  try {
    const nextUrl = await fileToAvatarDataUrl(file);
    state.authAvatarUrl = nextUrl;
    localStorage.setItem("authAvatarUrl", nextUrl);
    syncAuthAvatarPreview();
    showToast("头像已更新");
  } catch (error) {
    console.error(error);
    showToast("头像读取失败，请换一张图片");
  }
});

authPanels.forEach((panel) => {
  panel.addEventListener("submit", (event) => {
    event.preventDefault();
    const phone = panel.querySelector("[data-auth-phone]")?.value.trim();
    const agreed = panel.querySelector("[data-auth-agree]")?.checked;
    if (!phone) {
      showToast("请先填写手机号");
      return;
    }
    if (!agreed) {
      showToast("请先同意用户协议和隐私政策");
      return;
    }
    showToast(panel.dataset.authPanel === "register" ? "注册功能已接入前端" : "登录功能已接入前端");
  });
});

closeLegal?.addEventListener("click", closeLegalPanel);

legalBackdrop?.addEventListener("click", (event) => {
  if (event.target === legalBackdrop) closeLegalPanel();
});

supportBack?.addEventListener("click", closeSupportPage);

supportRefresh?.addEventListener("click", () => {
  supportForm?.reset();
  supportUploadGrid?.querySelectorAll(".support-thumb").forEach((item) => item.remove());
  showToast("反馈表单已刷新");
});

supportImages?.addEventListener("change", () => {
  supportUploadGrid?.querySelectorAll(".support-thumb").forEach((item) => item.remove());
  const files = Array.from(supportImages.files || []).slice(0, 3);
  files.forEach((file) => {
    const item = document.createElement("span");
    item.className = "support-thumb";
    item.style.backgroundImage = `url("${URL.createObjectURL(file)}")`;
    supportUploadGrid?.insertBefore(item, supportUploadGrid.querySelector(".support-upload-button"));
  });
  if ((supportImages.files || []).length > 3) showToast("最多上传三张截图");
});

supportForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!supportTitle.value.trim()) {
    showToast("请先填写问题标题");
    return;
  }
  if (!supportContent.value.trim()) {
    showToast("请先填写反馈内容");
    return;
  }
  showToast("反馈已提交，我们会尽快处理");
  supportForm.reset();
  supportUploadGrid?.querySelectorAll(".support-thumb").forEach((item) => item.remove());
});

pointsBack?.addEventListener("click", closePointsPage);

pointsActivateButton?.addEventListener("click", () => {
  const code = pointsCodeInput.value.trim();
  if (!code || code.length < 10) {
    showToast("请输入正确的十位CDK激活码");
    return;
  }
  state.points += 100;
  syncPointsBalance();
  pointsCodeInput.value = "";
  showToast("激活成功，已增加100积分");
});

keyBack?.addEventListener("click", closeKeyPage);

keyActivateButton?.addEventListener("click", () => {
  const code = keyCodeInput.value.trim();
  if (!code || code.length < 10) {
    showToast("请输入正确的十位CDK激活码");
    return;
  }
  state.memberStatus = "VIP会员";
  state.points += 100;
  syncKeyStatus();
  syncPointsBalance();
  keyCodeInput.value = "";
  showToast("密钥激活成功，已开通VIP会员");
});

closeHistory.addEventListener("click", () => {
  historyBackdrop.hidden = true;
  tabItems.forEach((item) => item.classList.toggle("is-active", item.dataset.tab === "首页"));
});

historyBackHome?.addEventListener("click", () => {
  historyBackdrop.hidden = true;
  minePage.hidden = true;
  tabItems.forEach((item) => item.classList.toggle("is-active", item.dataset.tab === "首页"));
  window.scrollTo({ top: 0, behavior: "smooth" });
});

historyBackdrop.addEventListener("click", (event) => {
  if (event.target === historyBackdrop) {
    historyBackdrop.hidden = true;
    tabItems.forEach((item) => item.classList.toggle("is-active", item.dataset.tab === "首页"));
  }
});

historyList.addEventListener("click", async (event) => {
  const copyButton = event.target.closest(".history-copy");
  if (!copyButton) return;
  try {
    await navigator.clipboard.writeText(copyButton.dataset.videoUrl || "");
    showToast("视频地址已复制");
  } catch {
    showToast("当前浏览器不支持复制");
  }
});

historyList.addEventListener("loadedmetadata", (event) => {
  if (event.target.matches(".history-video")) syncHistoryProgress(event.target);
}, true);

historyList.addEventListener("timeupdate", (event) => {
  if (event.target.matches(".history-video")) syncHistoryProgress(event.target);
}, true);

historyList.addEventListener("durationchange", (event) => {
  if (event.target.matches(".history-video")) syncHistoryProgress(event.target);
}, true);

historyList.addEventListener("input", (event) => {
  const input = event.target.closest(".history-progress-input");
  if (!input) return;
  const item = input.closest(".history-item");
  const video = item?.querySelector(".history-video");
  if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;
  video.currentTime = (Number(input.value) / 100) * video.duration;
  syncHistoryProgress(video);
});

async function createDigitalHumanVideo({ file, mode, script, voice, ratio, durationSeconds, resolution, onProgress }) {
  const source = await loadSource(file);
  const canvas = document.createElement("canvas");
  const size = getCanvasSize(ratio, resolution);
  canvas.width = size.width;
  canvas.height = size.height;
  const ctx = canvas.getContext("2d");
  const stream = canvas.captureStream(30);
  const mimeType = chooseMimeType();
  const chunks = [];
  const duration = getDurationMs(script, source, durationSeconds);

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
        ratio,
        resolution,
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

async function createSingingVideoWithWan({ file, audioUrl, resolution, onProgress }) {
  onProgress(8, "正在提交 Wan2.2-S2V 唱歌视频任务");

  const form = new FormData();
  form.append("image", file, file.name || "avatar.png");
  form.append("audioUrl", audioUrl);
  form.append("resolution", resolution === "720P" || resolution === "1080P" ? "720P" : "480P");

  const response = await fetch("/api/wan-s2v", {
    method: "POST",
    body: form
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || `Wan2.2-S2V 生成失败: ${response.status}`);
  }

  onProgress(92, "正在读取 Wan2.2-S2V 生成结果");
  const data = await response.json();
  if (!data.videoUrl) throw new Error("模型没有返回视频链接");

  const videoResponse = await fetch(data.videoUrl);
  if (!videoResponse.ok) throw new Error(`视频下载失败: ${videoResponse.status}`);
  return videoResponse.blob();
}

async function createTalkingVideoWithWan({ file, script, voice, cloneVoice, resolution, onProgress }) {
  onProgress(8, "正在生成口播配音并提交数字人任务");

  const form = new FormData();
  form.append("image", file, file.name || "avatar.png");
  form.append("script", script);
  form.append("voice", voice);
  if (cloneVoice) {
    form.append("cloneVoice", cloneVoice.blob, cloneVoice.filename || "voice.wav");
    form.append("cloneVoiceName", cloneVoice.name);
  }
  form.append("resolution", resolution === "720P" || resolution === "1080P" ? "720P" : "480P");

  const response = await fetch("/api/wan-talk", {
    method: "POST",
    body: form
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || `口播数字人生成失败: ${response.status}`);
  }

  onProgress(92, "正在读取口播数字人生成结果");
  const data = await response.json();
  if (!data.videoUrl) throw new Error("模型没有返回口播视频");

  const videoResponse = await fetch(data.videoUrl);
  if (!videoResponse.ok) throw new Error(`视频下载失败: ${videoResponse.status}`);
  return videoResponse.blob();
}

async function createReferenceImageFromVideo(file) {
  if (!file.type.startsWith("video/")) return file;

  const video = document.createElement("video");
  const url = URL.createObjectURL(file);
  video.src = url;
  video.muted = true;
  video.playsInline = true;
  video.preload = "auto";

  try {
    await waitForMedia(video, "loadedmetadata");
    video.currentTime = Math.min(0.5, Math.max(0, (video.duration || 1) / 3));
    await waitForMedia(video, "seeked");

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth || 720;
    canvas.height = video.videoHeight || 1280;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png", 0.95));
    if (!blob) throw new Error("视频首帧提取失败");
    return new File([blob], "video-reference.png", { type: "image/png" });
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function createDanceVideoWithWanAnimate({ imageFile, motionFile, duration, resolution, onProgress }) {
  onProgress(8, "正在提交 Wan2.2-Animate 动作迁移任务");

  const form = new FormData();
  form.append("image", imageFile, imageFile.name || "avatar.png");
  form.append("motionVideo", motionFile, motionFile.name || "dance.mp4");
  form.append("duration", duration === "auto" ? "20" : duration);
  form.append("resolution", resolution === "1080P" ? "Medium Res" : "Low Res");

  const response = await fetch("/api/wan-animate", {
    method: "POST",
    body: form
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || `Wan2.2-Animate 生成失败: ${response.status}`);
  }

  onProgress(92, "正在读取 Wan2.2-Animate 生成结果");
  const data = await response.json();
  if (!data.videoUrl) throw new Error("模型没有返回动作迁移视频");

  const videoResponse = await fetch(data.videoUrl);
  if (!videoResponse.ok) throw new Error(`视频下载失败: ${videoResponse.status}`);
  return videoResponse.blob();
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
  const { mode, script, voice, ratio, resolution, progress, elapsed, duration } = meta;
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
  drawHeader(ctx, mode, voice, ratio, resolution, progress);
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

function drawHeader(ctx, mode, voice, ratio, resolution, progress) {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const x = Math.max(32, w * 0.07);
  const y = Math.max(34, h * 0.04);
  const width = Math.min(w - x * 2, 616);
  const titleSize = Math.max(24, Math.min(34, w * 0.047));
  const metaSize = Math.max(17, Math.min(22, w * 0.031));
  const progressX = x + width - 56;

  ctx.save();
  ctx.fillStyle = "rgba(4, 12, 42, 0.72)";
  roundedRect(ctx, x, y, width, 96, 30);
  ctx.fill();
  ctx.strokeStyle = "rgba(85, 220, 255, 0.62)";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.font = `700 ${titleSize}px Microsoft YaHei, sans-serif`;
  ctx.fillText("星速数字人", x + 32, y + 45);
  ctx.fillStyle = "#4defff";
  ctx.font = `600 ${metaSize}px Microsoft YaHei, sans-serif`;
  ctx.fillText(`${voice} · ${ratio} · ${resolution}`, x + 32, y + 76);

  ctx.strokeStyle = "rgba(255,255,255,0.18)";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(progressX, y + 48, 28, -Math.PI / 2, Math.PI * 1.5);
  ctx.stroke();
  ctx.strokeStyle = "#2ff0ff";
  ctx.beginPath();
  ctx.arc(progressX, y + 48, 28, -Math.PI / 2, -Math.PI / 2 + progress * Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawAvatarStage(ctx, source, mode, beat, slow) {
  const canvasW = ctx.canvas.width;
  const canvasH = ctx.canvas.height;
  const x = Math.max(38, canvasW * 0.13);
  const y = Math.max(142, canvasH * 0.16);
  const width = Math.min(canvasW - x * 2, 528);
  const maxHeight = Math.max(230, canvasH - y - canvasH * 0.31);
  const height = Math.min(maxHeight, Math.max(250, width * 1.36));
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
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const barCount = Math.max(12, Math.min(22, Math.floor(w / 34)));
  const gap = Math.max(14, Math.min(24, w / (barCount + 12)));
  const barWidth = Math.max(7, Math.min(10, w / 78));
  const totalWidth = (barCount - 1) * gap + barWidth;
  const baseX = (w - totalWidth) / 2;
  const baseY = h * 0.7;
  const maxBarHeight = Math.max(48, h * 0.09);
  const color = mode === "图生歌声" ? "#ff58f1" : mode === "图生舞蹈" ? "#2ae6df" : "#27eaff";

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  for (let i = 0; i < barCount; i += 1) {
    const height = 18 + Math.abs(Math.sin(elapsed / 95 + i * 0.82)) * maxBarHeight;
    const x = baseX + i * gap;
    const grad = ctx.createLinearGradient(x, baseY - height, x, baseY);
    grad.addColorStop(0, "#ffffff");
    grad.addColorStop(0.35, color);
    grad.addColorStop(1, "rgba(20, 90, 255, 0.2)");
    ctx.fillStyle = grad;
    roundedRect(ctx, x, baseY - height, barWidth, height, 9);
    ctx.fill();
  }
  ctx.restore();
}

function drawSubtitle(ctx, script, progress) {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const lines = getCaptionLines(script || "大家好，我是你的 AI 数字人。");
  const index = Math.min(lines.length - 1, Math.floor(progress * lines.length));
  const text = lines[index] || lines[0];
  const panelX = Math.max(32, w * 0.08);
  const panelW = w - panelX * 2;
  const panelH = Math.max(126, Math.min(178, h * 0.14));
  const panelY = Math.min(Math.max(h * 0.68, h - panelH - 150), h - panelH - 130);
  const textX = panelX + Math.max(24, panelW * 0.06);
  const textY = panelY + Math.max(44, panelH * 0.34);
  const fontSize = Math.max(24, Math.min(34, w * 0.047));
  const labelSize = Math.max(17, Math.min(22, w * 0.031));

  ctx.save();
  ctx.fillStyle = "rgba(1, 6, 24, 0.74)";
  roundedRect(ctx, panelX, panelY, panelW, panelH, 28);
  ctx.fill();
  ctx.strokeStyle = "rgba(55, 230, 255, 0.45)";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#f7fbff";
  ctx.font = `700 ${fontSize}px Microsoft YaHei, sans-serif`;
  drawWrappedText(ctx, text, textX, textY, panelW - (textX - panelX) * 2, fontSize * 1.35, 2);

  ctx.fillStyle = "#43eaff";
  ctx.font = `600 ${labelSize}px Microsoft YaHei, sans-serif`;
  ctx.fillText("AI 口播字幕", textX, panelY + panelH - 30);
  ctx.restore();
}

function drawFooter(ctx, progress, duration) {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const x = Math.max(34, w * 0.1);
  const y = h - 108;
  const width = w - x * 2;

  ctx.save();
  ctx.fillStyle = "rgba(255,255,255,0.16)";
  roundedRect(ctx, x, y, width, 12, 12);
  ctx.fill();

  const grad = ctx.createLinearGradient(x, 0, x + width, 0);
  grad.addColorStop(0, "#1b73ff");
  grad.addColorStop(0.55, "#33efff");
  grad.addColorStop(1, "#ff56f1");
  ctx.fillStyle = grad;
  roundedRect(ctx, x, y, width * progress, 12, 12);
  ctx.fill();

  ctx.fillStyle = "rgba(230, 247, 255, 0.86)";
  ctx.font = `600 ${Math.max(18, Math.min(20, w * 0.03))}px Microsoft YaHei, sans-serif`;
  const current = Math.round((duration * progress) / 1000);
  ctx.fillText(`00:${String(current).padStart(2, "0")} / 00:${String(Math.round(duration / 1000)).padStart(2, "0")}`, x, y + 48);
  ctx.textAlign = "right";
  ctx.fillText("星速生成", x + width, y + 48);
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

function getCanvasSize(ratio, resolution) {
  const base = ratioDimensions[ratio] || ratioDimensions["9:16"];
  if (resolution !== "1080P") return base;
  return {
    width: Math.round(base.width * 1.5),
    height: Math.round(base.height * 1.5)
  };
}

function getDurationMs(script, source, durationSeconds) {
  if (durationSeconds !== "auto") return Number(durationSeconds) * 1000;

  const textDuration = Math.max(7000, (script.length || 24) * 150);
  if (source.type === "video" && Number.isFinite(source.duration)) return Math.max(1000, source.duration * 1000);
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
  return state.voice || "清晰女声";
}

function getSelectedCloneVoice() {
  if (!state.clonedVoiceId) return null;
  return state.clonedVoices.find((voice) => voice.id === state.clonedVoiceId) || null;
}

function setVoiceCloneFile(file) {
  if (state.voiceCloneUrl) URL.revokeObjectURL(state.voiceCloneUrl);
  state.voiceCloneFile = file || null;
  state.voiceCloneUrl = file ? URL.createObjectURL(file) : "";

  voiceClonePreview.hidden = true;
  voiceClonePreview.removeAttribute("src");

  if (!file) return;

  voiceClonePreview.src = state.voiceCloneUrl;
  voiceClonePreview.hidden = false;
  voiceCloneStatus.textContent = `${file.name} 已就绪`;
}

function addClonedVoiceOption(voice) {
  const existing = document.querySelector(`[data-clone-id="${voice.id}"]`);
  if (existing) existing.remove();

  state.clonedVoices = state.clonedVoices.filter((item) => item.id !== voice.id).concat(voice);

  const button = document.createElement("button");
  button.className = "voice-option clone-option";
  button.type = "button";
  button.dataset.voice = voice.name;
  button.dataset.ttsVoice = "clone";
  button.dataset.cloneId = voice.id;
  button.innerHTML = `
    <span class="clone-portrait" aria-hidden="true"></span>
    <strong>${escapeHtml(voice.name)}</strong>
  `;
  const grid = voicePanel.querySelector(".voice-grid");
  const firstBuiltinVoice = grid.querySelector(".voice-option:not(.clone-option)");
  grid.insertBefore(button, firstBuiltinVoice);
}

function renderAvatarList() {
  avatarSelectList.innerHTML = "";

  if (!state.avatars.length) {
    avatarSelectList.innerHTML = '<button class="avatar-select-empty" type="button">还没有录好的数字人，请先点“定制数字人”创建</button>';
    return;
  }

  state.avatars.forEach((avatar) => {
    const button = document.createElement("button");
    button.className = "avatar-select-option";
    button.type = "button";
    button.dataset.avatarId = avatar.id;
    button.innerHTML = `
      <strong>${escapeHtml(avatar.name)}</strong>
      <span>${new Date(avatar.createdAt).toLocaleString("zh-CN")}</span>
    `;
    avatarSelectList.appendChild(button);
  });
}

async function createVoiceClonePreview(file, name) {
  const form = new FormData();
  form.append("audio", file, file.name || "voice.wav");
  form.append("sampleText", `你好，我是${name}，这是我的克隆音色。`);

  const response = await fetch("/api/clone-voice", {
    method: "POST",
    body: form
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || `克隆音色创建失败: ${response.status}`);
  }

  return response.blob();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
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
    const request = indexedDB.open("xingsu-digital-human", 3);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("works")) {
        db.createObjectStore("works", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("avatars")) {
        db.createObjectStore("avatars", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("voices")) {
        db.createObjectStore("voices", { keyPath: "id" });
      }
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

async function saveAvatar(avatar) {
  const db = await openDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction("avatars", "readwrite");
    tx.objectStore("avatars").put(avatar);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

async function listAvatars() {
  const db = await openDb();
  const avatars = await new Promise((resolve, reject) => {
    const tx = db.transaction("avatars", "readonly");
    const request = tx.objectStore("avatars").getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return avatars.sort((a, b) => b.createdAt - a.createdAt);
}

async function saveVoice(voice) {
  const db = await openDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction("voices", "readwrite");
    tx.objectStore("voices").put(voice);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

async function listVoices() {
  const db = await openDb();
  const voices = await new Promise((resolve, reject) => {
    const tx = db.transaction("voices", "readonly");
    const request = tx.objectStore("voices").getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return voices.sort((a, b) => b.createdAt - a.createdAt);
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

async function openCreationPanel() {
  const works = await listWorks();
  renderCreationRecords(works);
  historyBackdrop.hidden = false;
}

async function refreshCreationPanelIfOpen() {
  if (historyBackdrop.hidden) return;
  const works = await listWorks();
  renderCreationRecords(works);
}

function renderCreationRecords(works) {
  historyList.innerHTML = "";
  const records = state.activeCreation ? [state.activeCreation, ...works] : works;
  const queueCount = records.filter((work) => work.status === "generating").length;
  const historyStatus = document.querySelector(".history-header p");
  if (historyStatus) {
    historyStatus.innerHTML = `<span></span> ${queueCount ? "生成中" : "空闲"} <i></i> 队列中有 ${queueCount} 个任务`;
  }

  if (!records.length) {
    historyList.innerHTML = '<p class="empty-history">还没有创作记录，先生成一个视频吧。</p>';
    return;
  }

  records.forEach((work) => {
    const item = document.createElement("article");
    item.className = `history-item ${work.status === "generating" ? "is-generating" : work.status === "failed" ? "is-failed" : "is-success"}`;
    const isDone = work.status === "success" || work.blob;
    const url = isDone ? URL.createObjectURL(work.blob) : "";
    const title = work.script || `${work.mode}作品`;
    const shortTitle = title.length > 24 ? `${title.slice(0, 24)}...` : title;
    const created = new Date(work.createdAt).toLocaleString("zh-CN", { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" });
    item.innerHTML = `
      <span class="history-status-pill">${work.statusText || (isDone ? "已完成" : "正在生成")}</span>
      ${isDone ? `<video class="history-video" src="${url}" controls playsinline preload="metadata"></video>` : '<div class="history-pending"><span></span><strong>生成中</strong></div>'}
      <div class="history-meta">
        <strong>${escapeHtml(shortTitle)}</strong>
        <span>${escapeHtml(work.mode)} · ${created}</span>
        ${isDone ? `
          <div class="history-progress">
            <input class="history-progress-input" type="range" min="0" max="100" value="0" step="0.1" aria-label="播放进度">
            <div class="history-progress-time">
              <span class="history-current-time">00:00</span>
              <span class="history-duration">00:00</span>
            </div>
          </div>
        ` : ""}
        <div class="history-actions">
          ${isDone ? `<a class="history-download" href="${url}" download="${work.filename}">下载</a><button class="history-copy" type="button" data-video-url="${url}">复制地址</button>` : `<em>正在生成视频，请稍候</em>`}
        </div>
      </div>
    `;
    historyList.appendChild(item);
  });
}

function formatMediaTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
  const total = Math.floor(seconds);
  const minutes = Math.floor(total / 60);
  const rest = total % 60;
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

function syncHistoryProgress(video) {
  const item = video.closest(".history-item");
  if (!item) return;
  const input = item.querySelector(".history-progress-input");
  const current = item.querySelector(".history-current-time");
  const duration = item.querySelector(".history-duration");
  if (!input || !current || !duration) return;

  const total = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 0;
  const progress = total ? (video.currentTime / total) * 100 : 0;
  input.value = String(progress);
  input.style.setProperty("--progress", `${Math.min(100, Math.max(0, progress))}%`);
  current.textContent = formatMediaTime(video.currentTime);
  duration.textContent = formatMediaTime(total);
}

async function loadSavedVoices() {
  try {
    const voices = await listVoices();
    voices.forEach(addClonedVoiceOption);
    syncSettingControls();
  } catch (error) {
    console.error(error);
  }
}

async function loadSavedAvatars() {
  try {
    state.avatars = await listAvatars();
    renderAvatarList();
  } catch (error) {
    console.error(error);
  }
}

setMode(state.selectedMode);
syncSettingControls();
loadSavedAvatars();
loadSavedVoices();
syncAuthAvatarPreview();
