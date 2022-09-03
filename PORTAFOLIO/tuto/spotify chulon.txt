Add-Type -AssemblyName PresentationFramework
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/khanhas/spicetify-cli/master/install.ps1" | Invoke-Expression
spicetify
spicetify backup apply enable-devtool
[System.Windows.MessageBox]::Show('Please drag the themes into the themes folder located at | C:\Users\YourUserName\.spicetify\Themes |')
spicetify config inject_css 1 replace_colors 1 overwrite_assets 1
spicetify apply
pause