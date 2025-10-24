!macro customInit
  ; 确保以管理员权限运行
  UserInfo::GetAccountType
  Pop $R0
  ${If} $R0 != "Admin"
    MessageBox MB_ICONSTOP "此安装程序需要管理员权限才能运行。请右键点击安装程序并选择'以管理员身份运行'。"
    Quit
  ${EndIf}

  ; 设置默认安装路径为 Program Files
  ${If} ${RunningX64}
    StrCpy $INSTDIR "$PROGRAMFILES64\${PRODUCT_NAME}"
  ${Else}
    StrCpy $INSTDIR "$PROGRAMFILES\${PRODUCT_NAME}"
  ${EndIf}
!macroend

!macro customInstall
  ; 创建程序组
  CreateDirectory "$SMPROGRAMS\${PRODUCT_NAME}"
  CreateShortCut "$SMPROGRAMS\${PRODUCT_NAME}\${PRODUCT_NAME}.lnk" "$INSTDIR\${PRODUCT_FILENAME}" "" "$INSTDIR\${PRODUCT_FILENAME}" 0
  CreateShortCut "$SMPROGRAMS\${PRODUCT_NAME}\卸载 ${PRODUCT_NAME}.lnk" "$INSTDIR\Uninstall ${PRODUCT_NAME}.exe"

  ; 注册文件关联
  WriteRegStr HKCR ".ea2" "" "ExamAware.Document"
  WriteRegStr HKCR "ExamAware.Document" "" "ExamAware 考试档案文件"
  WriteRegStr HKCR "ExamAware.Document\DefaultIcon" "" "$INSTDIR\${PRODUCT_FILENAME},0"
  WriteRegStr HKCR "ExamAware.Document\shell\open\command" "" '"$INSTDIR\${PRODUCT_FILENAME}" "%1"'

  ; 刷新图标缓存
  System::Call 'shell32.dll::SHChangeNotify(l, l, i, i) v (0x08000000, 0, 0, 0)'
!macroend

!macro customUnInstall
  ; 删除程序组
  RMDir /r "$SMPROGRAMS\${PRODUCT_NAME}"

  ; 删除文件关联
  DeleteRegKey HKCR ".ea2"
  DeleteRegKey HKCR "ExamAware.Document"

  ; 刷新图标缓存
  System::Call 'shell32.dll::SHChangeNotify(l, l, i, i) v (0x08000000, 0, 0, 0)'
!macroend

!macro customHeader
  ; 自定义安装程序标题
  !define MUI_CUSTOMFUNCTION_GUIINIT onGUIInit

  Function onGUIInit
    ; 设置安装程序窗口标题
    FindWindow $0 "#32770" "" $HWNDPARENT
    GetDlgItem $0 $0 1037
    SendMessage $0 ${WM_SETTEXT} 0 "STR:正在安装 ${PRODUCT_NAME}..."
  FunctionEnd
!macroend

; 安装页面定制
!define MUI_WELCOMEPAGE_TITLE "欢迎使用 ${PRODUCT_NAME} 安装向导"
!define MUI_WELCOMEPAGE_TEXT "安装向导将指导您完成 ${PRODUCT_NAME} 的安装过程。$\r$\n$\r$\n在开始安装之前，建议您关闭其他所有应用程序。这将使安装程序能够更新相关的系统文件，而无需重新启动您的计算机。$\r$\n$\r$\n单击 [下一步] 继续。"

!define MUI_LICENSEPAGE_TEXT_TOP "请仔细阅读下列许可协议。您必须接受协议的所有条款才能安装此软件。"
!define MUI_LICENSEPAGE_TEXT_BOTTOM "如果您接受协议中的条款，单击 [我接受] 继续安装。如果您选择 [取消]，安装程序将会关闭。要安装 ${PRODUCT_NAME}，您必须接受此协议。"

!define MUI_COMPONENTSPAGE_TEXT_TOP "请选择您要安装的 ${PRODUCT_NAME} 组件。单击 [下一步] 继续。"

!define MUI_DIRECTORYPAGE_TEXT_TOP "安装程序将安装 ${PRODUCT_NAME} 到下列文件夹。要安装到不同文件夹，单击 [浏览] 并选择其他文件夹。单击 [下一步] 继续。"

!define MUI_INSTFILESPAGE_FINISHHEADER_TEXT "正在完成 ${PRODUCT_NAME} 安装向导"
!define MUI_INSTFILESPAGE_FINISHHEADER_SUBTEXT "安装已成功完成。"

!define MUI_FINISHPAGE_TITLE "完成 ${PRODUCT_NAME} 安装向导"
!define MUI_FINISHPAGE_TEXT "${PRODUCT_NAME} 已成功地安装在您的计算机上。$\r$\n$\r$\n单击 [完成] 关闭此向导。"
!define MUI_FINISHPAGE_RUN_TEXT "运行 ${PRODUCT_NAME}"
