Hub.Handler.Version = 5; // Released at https://hub.splitscreen.me/ on Tue Nov 30 2021 20:09:50 GMT+0000 (Coordinated Universal Time).
Hub.Handler.Id = "DQDTWfT8ye9nYx3hE";
Hub.Maintainer.Name = "Talos91";
Hub.Maintainer.Id = "eeL7HAz8zJovChWw4";

Game.KillMutex = ["Zombie Army Trilogy"];
Game.DirSymlinkExclusions = ["bin"];
Game.FileSymlinkExclusions = ["steam_api.dll", "steam_interfaces.txt", "steam_appid.txt", "local_save.txt", "winmm.dll", "xinput1_3.dll"];
Game.UseNucleusEnvironment = true;
Game.UseGoldberg = true;
Game.GoldbergNoLocalSave = true;
Game.CreateSteamAppIdByExe = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SupportsKeyboard = true;
Game.ExecutableName = "ZAT.exe";
Game.SteamID = "301640";
Game.GUID = "Zombie Army Trilogy";
Game.GameName = "Zombie Army Trilogy";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.LauncherTitle = "splashscreen";
Game.BinariesFolder = "bin";
Game.HideTaskbar = false;
Game.StartArguments = "-subwindow";
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Zombie Army Trilogy";
Game.FakeFocus = true;
Game.FakeFocusInterval = 7000;
Game.SendFakeFocusMsg = true;
Game.KeyboardPlayerSkipFakeFocus = true;
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_3.dll"];
Game.HideCursor = false;
Game.UserProfileConfigPath = "AppData\\Local\\Zombie Army Trilogy";
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\301640\\remote";
Game.Description =
  "Launch with Steam open if you own this game on Steam. You can access each instance saves in the app, after the first launch click game options/open user profile save path in the UI. Alt-tab to the keyboard instance to control it. If you get uneven fps in the instances try alt tabbing to the Nucleus app window when using multiple gamepads only, the game windows will still remain on top.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 30;

//ProtoInput:

Game.SupportsMultipleKeyboardsAndMice = false;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = false;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
Game.LockInputToggleKey = 0x23;

Game.Play = function() {
  Context.BackupFile(Context.NucleusUserRoot + "\\AppData\\Local\\Zombie Army Trilogy\\Settings.ini", true);

  var VideoConfig = Context.NucleusUserRoot + "\\AppData\\Local\\Zombie Army Trilogy\\Settings.ini";
  Context.ModifySaveFile(VideoConfig, VideoConfig, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("Display Settings", "Resolution_Width", Context.Width),
    new Nucleus.IniSaveInfo("Display Settings", "Resolution_Height", Context.Height)
  ]);

  var VideoConfig = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Settings.ini";
  Context.ModifySaveFile(VideoConfig, VideoConfig, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("Display Settings", "Resolution_Width", Context.Width),
    new Nucleus.IniSaveInfo("Display Settings", "Resolution_Height", Context.Height)
  ]);

  var interfaces = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_interfaces.txt";
  var lines = [
    "SteamClient014",
    "SteamGameServer012",
    "SteamGameServerStats001",
    "SteamUser017",
    "SteamFriends014",
    "SteamUtils007",
    "SteamMatchMaking009",
    "SteamMatchMakingServers002",
    "STEAMUSERSTATS_INTERFACE_VERSION011",
    "STEAMAPPS_INTERFACE_VERSION006",
    "SteamNetworking005",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION012",
    "STEAMSCREENSHOTS_INTERFACE_VERSION002",
    "STEAMHTTP_INTERFACE_VERSION002",
    "STEAMUNIFIEDMESSAGES_INTERFACE_VERSION001",
    "STEAMUGC_INTERFACE_VERSION002",
    "STEAMAPPLIST_INTERFACE_VERSION001",
    "STEAMMUSIC_INTERFACE_VERSION001",
    "STEAMCONTROLLER_INTERFACE_VERSION"
  ];

  Context.WriteTextFile(interfaces, lines);

  if (Context.HasKeyboardPlayer == true) {
    Game.ProtoInput.RegisterRawInputHook = false;
    Game.ProtoInput.GetRawInputDataHook = false;
    Game.ProtoInput.MessageFilterHook = false;
    Game.ProtoInput.GetCursorPosHook = false;
    Game.ProtoInput.SetCursorPosHook = false;
    Game.ProtoInput.ClipCursorHook = false;
    Game.ProtoInput.RawInputFilter = false;
    Game.ProtoInput.MouseMoveFilter = false;
    Game.ProtoInput.MouseActivateFilter = false;
    Game.ProtoInput.WindowActivateFilter = false;
    Game.ProtoInput.WindowActvateAppFilter = false;
    Game.ProtoInput.MouseWheelFilter = false;
    Game.ProtoInput.MouseButtonFilter = false;
  } else {
    Game.SetForegroundWindowElsewhere = true;

    Game.ProtoInput.RegisterRawInputHook = true;
    Game.ProtoInput.GetRawInputDataHook = true;
    Game.ProtoInput.MessageFilterHook = true;
    Game.ProtoInput.GetCursorPosHook = true;
    Game.ProtoInput.SetCursorPosHook = true;
    Game.ProtoInput.ClipCursorHook = true;
    Game.ProtoInput.RawInputFilter = true;
    Game.ProtoInput.MouseMoveFilter = false;
    Game.ProtoInput.MouseActivateFilter = true;
    Game.ProtoInput.WindowActivateFilter = false;
    Game.ProtoInput.WindowActvateAppFilter = false;
    Game.ProtoInput.MouseWheelFilter = true;
    Game.ProtoInput.MouseButtonFilter = true;
  }
};
