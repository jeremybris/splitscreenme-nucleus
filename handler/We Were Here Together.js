Hub.Handler.Version = 2; // Released at https://hub.splitscreen.me/ on Sun Mar 14 2021 03:18:27 GMT+0000 (UTC).
Hub.Handler.Id = "YSQ7kaP5JZ8ymLgAC";
Hub.Maintainer.Name = "Talos91";
Hub.Maintainer.Id = "eeL7HAz8zJovChWw4";

Game.DirSymlinkExclusions = ["We Were Here Together_Data\\Plugins"];
Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt", "dinput8.dll", "xinput1_3.dll", "xinput1_4.dll", "xinput9_1_0.dll"];
Game.NeedsSteamEmulation = false;
Game.UseGoldberg = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.ExecutableName = "We Were Here Together.exe";
Game.SteamID = "865360";
Game.GUID = "We Were Here Together";
Game.GameName = "We Were Here Together";
Game.MaxPlayers = 2;
Game.MaxPlayersOneMonitor = 2;
Game.LauncherTitle = "";
Game.Hook.ForceFocusWindowName = "We Were Here Together";
Game.FakeFocus = true;
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.UseDInputBlocker = true;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = ["xinput1_3.dll", "xinput1_4.dll", "xinput9_1_0.dll"];
Game.Hook.CustomDllEnabled = false;
Game.BlockRawInput = false;
Game.UserProfileConfigPath = "AppData\\LocalLow\\Total Mayhem Games\\We Were Here Together\\Data\\Configs";
Game.UserProfileSavePath = "AppData\\LocalLow\\Total Mayhem Games\\We Were Here Together\\Data\\Saves";
Game.Description =
  "IMPORTANT: For the instances to resize correctly launch two instances first, wait for them to open and get past the title screen, then close Nucleus, run the script again and they will resize correctly in all subsequent runs. Create a public room in one instance and the other player can join, reduce graphic settings per instance to improve performance. If you use keyboards and mice after all the instances open press the END key to lock the input for all instances to have their own cursor. Press the END key again to unlock the input. You can also use CTRL+Q to close Nucleus and all its instances. Add custom resolutions in your AMD/Nvidia/Intel panel (For example: 960x1080, 960x540 etc.) so the game can see and use them. If the windows do not resize at all for you set each instance resolution to 640x480 and disable fullscreen in the in-game graphic settings.";
Game.PauseBetweenStarts = 42;

Game.SupportsMultipleKeyboardsAndMice = true;

Game.HookSetCursorPos = true;
Game.HookGetCursorPos = true;
Game.HookGetKeyState = false;
Game.HookGetAsyncKeyState = false;
Game.HookGetKeyboardState = false;
Game.HookFilterRawInput = true;
Game.HookFilterMouseMessages = false;
Game.HookUseLegacyInput = false;
Game.HookDontUpdateLegacyInMouseMsg = false;
Game.HookMouseVisibility = false;

Game.SendNormalMouseInput = true;
Game.SendNormalKeyboardInput = true;
Game.SendScrollWheel = true;
Game.ForwardRawKeyboardInput = false;
Game.ForwardRawMouseInput = false;
Game.HookReRegisterRawInput = true;
Game.HookReRegisterRawInputMouse = true;
Game.HookReRegisterRawInputKeyboard = false;
Game.DrawFakeMouseCursor = true;
Game.LockInputAtStart = false;
Game.LockInputToggleKey = 0x23;

Game.Play = function() {
  var Args = (Context.Args = " -screen-fullscreen 0 -popupwindow " + " -screen-width " + Context.Width + " -screen-height " + Context.Height);

  Context.StartArguments = Args;

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Total Mayhem Games\\We Were Here Together", "Screenmanager Fullscreen mode_h3630240806", 3, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Total Mayhem Games\\We Were Here Together", "Screenmanager Resolution Height_h2627697771", Context.Height, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Total Mayhem Games\\We Were Here Together", "Screenmanager Resolution Width_h182942802", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Total Mayhem Games\\We Were Here Together", "Screenmanager Resolution Use Native_h1405027254", 0, Nucleus.RegType.DWord);

  var username = System.Environment.UserName;
  var id = Context.PlayerID + 38;

  if (System.IO.File.Exists("C:\\Users\\" + username + "\\AppData\\LocalLow\\Total Mayhem Games\\We Were Here Together\\Data\\Configs\\Configuration-765611990231254" + id + "")) {
    var path = "%USERPROFILE%\\AppData\\LocalLow\\Total Mayhem Games\\We Were Here Together\\Data\\Configs\\Configuration-765611990231254" + id + "";
    Context.ChangeXmlNodeInnerTextValue(path, "//Resolution", "(640,480)");
    //Context.ChangeXmlNodeInnerTextValue(path, "//Resolution", "(" + Context.Width + "," + Context.Height + ")");
    Context.ChangeXmlNodeInnerTextValue(path, "//Fullscreen", "False");
  } else {
  }

  if (Context.HasKeyboardPlayer == true) {
  } else {
    Game.SetForegroundWindowElsewhere = true;
    Game.SupportsMultipleKeyboardsAndMice = false;
  }
};
