//Fonts
const defaultFont = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const boldFont = ['𝐚', '𝐛', '𝐜', '𝐝', '𝐞', '𝐟', '𝐠', '𝐡', '𝐢', '𝐣', '𝐤', '𝐥', '𝐦', '𝐧', '𝐨', '𝐩', '𝐪', '𝐫', '𝐬', '𝐭', '𝐮', '𝐯', '𝐰', '𝐱', '𝐲', '𝐳', '𝐀', '𝐁', '𝐂', '𝐃', '𝐄', '𝐅', '𝐆', '𝐇', '𝐈', '𝐉', '𝐊', '𝐋', '𝐌', '𝐍', '𝐎', '𝐏', '𝐐', '𝐑', '𝐒', '𝐓', '𝐔', '𝐕', '𝐖', '𝐗', '𝐘', '𝐙', '𝟎', '𝟏', '𝟐', '𝟑', '𝟒', '𝟓', '𝟔', '𝟕', '𝟖', '𝟗']
const italicFont = ['𝘢', '𝘣', '𝘤', '𝘥', '𝘦', '𝘧', '𝘨', '𝘩', '𝘪', '𝘫', '𝘬', '𝘭', '𝘮', '𝘯', '𝘰', '𝘱', '𝘲', '𝘳', '𝘴', '𝘵', '𝘶', '𝘷', '𝘸', '𝘹', '𝘺', '𝘻', '𝘈', '𝘉', '𝘊', '𝘋', '𝘌', '𝘍', '𝘎', '𝘏', '𝘐', '𝘑', '𝘒', '𝘓', '𝘔', '𝘕', '𝘖', '𝘗', '𝘘', '𝘙', '𝘚', '𝘛', '𝘜', '𝘞', '𝘝', '𝘟', '𝘠', '𝘡', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const gothicFont = ['𝔞', '𝔟', '𝔠', '𝔡', '𝔢', '𝔣', '𝔤', '𝔥', '𝔦', '𝔧', '𝔨', '𝔩', '𝔪', '𝔫', '𝔬', '𝔭', '𝔮', '𝔯', '𝔰', '𝔱', '𝔲', '𝔳', '𝔴', '𝔵', '𝔶', '𝔷', '𝔄', '𝔅', 'ℭ', '𝔇', '𝔈', '𝔉', '𝔊', 'ℌ', 'ℑ', '𝔍', '𝔎', '𝔏', '𝔐', '𝔑', '𝔒', '𝔓', '𝔔', 'ℜ', '𝔖', '𝔗', '𝔘', '𝔙', '𝔚', '𝔛', '𝔜', 'ℨ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const monospaceFont = ['𝚊', '𝚋', '𝚌', '𝚍', '𝚎', '𝚏', '𝚐', '𝚑', '𝚒', '𝚓', '𝚔', '𝚕', '𝚖', '𝚗', '𝚘', '𝚙', '𝚚', '𝚛', '𝚜', '𝚝', '𝚞', '𝚟', '𝚠', '𝚡', '𝚢', '𝚣', '𝙰', '𝙱', '𝙲', '𝙳', '𝙴', '𝙵', '𝙶', '𝙷', '𝙸', '𝙹', '𝙺', '𝙻', '𝙼', '𝙽', '𝙾', '𝙿', '𝚀', '𝚁', '𝚂', '𝚃', '𝚄', '𝚅', '𝚆', '𝚇', '𝚈', '𝚉', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const doublestruckFont = ['𝕒', '𝕓', '𝕔', '𝕕', '𝕖', '𝕗', '𝕘', '𝕙', '𝕚', '𝕛', '𝕜', '𝕝', '𝕞', '𝕟', '𝕠', '𝕡', '𝕢', '𝕣', '𝕤', '𝕥', '𝕦', '𝕧', '𝕨', '𝕩', '𝕪', '𝕫', '𝔸', '𝔹', 'ℂ', '𝔻', '𝔼', '𝔽', '𝔾', 'ℍ', '𝕀', '𝕁', '𝕂', '𝕃', '𝕄', 'ℕ', '𝕆', 'ℙ', 'ℚ', 'ℝ', '𝕊', '𝕋', '𝕌', '𝕍', '𝕎', '𝕏', '𝕐', 'ℤ', '𝟘', '𝟙', '𝟚', '𝟛', '𝟜', '𝟝', '𝟞', '𝟟', '𝟠', '𝟡']
const cursiveFont = ['𝒶', '𝒷', '𝒸', '𝒹', 'ℯ', '𝒻', 'ℊ', '𝒽', '𝒾', '𝒿', '𝓀', '𝓁', '𝓂', '𝓃', 'ℴ', '𝓅', '𝓆', '𝓇', '𝓈', '𝓉', '𝓊', '𝓋', '𝓌', '𝓍', '𝓎', '𝓏', '𝒜', 'ℬ', '𝒞', '𝒟', 'ℰ', 'ℱ', '𝒢', 'ℋ', 'ℐ', '𝒥', '𝒦', 'ℒ', 'ℳ', '𝒩', '𝒪', '𝒫', '𝒬', 'ℛ', '𝒮', '𝒯', '𝒰', '𝒱', '𝒲', '𝒳', '𝒴', '𝒵', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const rustifyFont = ['а', 'б', 'c', 'д', 'ё', 'f', 'g', 'н', 'ї', 'j', 'к', 'г', 'ѫ', 'п', 'ѳ', 'p', 'ф', 'я', '$', 'т', 'ц', 'ѵ', 'щ', 'ж', 'ч', 'з', 'А', 'Б', 'C', 'Д', 'Є', 'F', 'G', 'H', 'Ї', 'J', 'К', 'Г', 'Ѫ', 'Й', 'Ѳ', 'P', 'Ф', 'Я', '$', 'T', 'Ц', 'Ш', 'Ж', 'Ч', 'З', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const sorcererFont = ['ǟ', 'ɮ', 'ƈ', 'ɖ', 'ɛ', 'ʄ', 'ɢ', 'ɦ', 'ɨ', 'ʝ', 'ӄ', 'ʟ', 'ʍ', 'ռ', 'օ', 'ք', 'զ', 'ʀ', 'ֆ', 'ȶ', 'ʊ', 'ʋ', 'ա', 'Ӽ', 'ʏ', 'ʐ', 'ǟ', 'ɮ', 'ƈ', 'ɖ', 'ɛ', 'ʄ', 'ɢ', 'ɦ', 'ɨ', 'ʝ', 'ӄ', 'ʟ', 'ʍ', 'ռ', 'օ', 'ք', 'զ', 'ʀ', 'ֆ', 'ȶ', 'ʊ', 'ա', 'Ӽ', 'ʏ', 'ʐ', ' ', 'յ', 'շ', 'Յ', 'կ', 'Տ', 'ճ', 'Դ', 'Ց', 'գ', 'օ']
const circledFont = ['ⓐ', 'ⓑ', 'ⓒ', 'ⓓ', 'ⓔ', 'ⓕ', 'ⓖ', 'ⓗ', 'ⓘ', 'ⓙ', 'ⓚ', 'ⓛ', 'ⓜ', 'ⓝ', 'ⓞ', 'ⓟ', 'ⓠ', 'ⓡ', 'ⓢ', 'ⓣ', 'ⓤ', 'ⓥ', 'ⓦ', 'ⓧ', 'ⓨ', 'ⓩ', 'Ⓐ', 'Ⓑ', 'Ⓒ', 'Ⓓ', 'Ⓔ', 'Ⓕ', 'Ⓖ', 'Ⓗ', 'Ⓘ', 'Ⓙ', 'Ⓚ', 'Ⓛ', 'Ⓜ', 'Ⓝ', 'Ⓞ', 'Ⓟ', 'Ⓠ', 'Ⓡ', 'Ⓢ', 'Ⓣ', 'Ⓤ', 'Ⓥ', 'Ⓦ', 'Ⓧ', 'Ⓨ', 'Ⓩ', '0', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨']
const boxedFont = ['🄰', '🄱', '🄲', '🄳', '🄴', '🄵', '🄶', '🄷', '🄸', '🄹', '🄺', '🄻', '🄼', '🄽', '🄾', '🄿', '🅀', '🅁', '🅂', '🅃', '🅄', '🅅', '🅆', '🅇', '🅈', '🅉', '🄰', '🄱', '🄲', '🄳', '🄴', '🄵', '🄶', '🄷', '🄸', '🄹', '🄺', '🄻', '🄼', '🄽', '🄾', '🄿', '🅀', '🅁', '🅂', '🅃', '🅄', '🅅', '🅆', '🅇', '🅈', '🅉', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const curvedFont = ['ᗩ', 'ᗷ', 'ᑕ', 'ᗪ', 'E', 'ᖴ', 'G', 'ᕼ', 'I', 'ᒍ', 'K', 'ᒪ', 'ᗰ', 'ᑎ', 'O', 'ᑭ', 'ᑫ', 'ᖇ', 'ᔕ', 'T', 'ᑌ', 'ᐯ', 'ᗯ', '᙭', 'Y', 'ᘔ', 'ᗩ', 'ᗷ', 'ᑕ', 'ᗪ', 'E', 'ᖴ', 'G', 'ᕼ', 'I', 'ᒍ', 'K', 'ᒪ', 'ᗰ', 'ᑎ', 'O', 'ᑭ', 'ᑫ', 'ᖇ', 'ᔕ', 'T', 'ᑌ', 'ᐯ', 'ᗯ', '᙭', 'Y', 'ᘔ', 'օ', 'յ', 'շ', 'Յ', 'կ', 'Տ', 'ճ', 'Դ', 'Ց', 'գ']
const symbolicFont = ['@', '฿', 'ς', 'Ð', 'Ξ', 'ךּ', 'ĝ', 'Ħ', '¡', '∂', 'қ', 'ĺ', 'm', 'מ', 'θ', 'Þ', 'Θ', 'я', '§', '‡', 'ט', 'ע', 'שּׂ', 'Ж', 'צּ', 'ζ', '@', '฿', 'ς', 'Ð', 'Ξ', 'ךּ', 'ĝ', 'Ħ', '¡', '∂', 'қ', 'ĺ', 'm', 'מ', 'θ', 'Þ', 'Θ', 'я', '§', '‡', 'ט', 'ע', 'שּׂ', 'Ж', 'צּ', 'ζ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const negSquaredFont = ['🅰', '🅱', '🅲', '🅳', '🅴', '🅵', '🅶', '🅷', '🅸', '🅹', '🅺', '🅻', '🅼', '🅽', '🅾', '🅿', '🆀', '🆁', '🆂', '🆃', '🆄', '🆅', '🆆', '🆇', '🆈', '🆉', '🅰', '🅱', '🅲', '🅳', '🅴', '🅵', '🅶', '🅷', '🅸', '🅹', '🅺', '🅻', '🅼', '🅽', '🅾', '🅿', '🆀', '🆁', '🆂', '🆃', '🆄', '🆅', '🆆', '🆇', '🆈', '🆉', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const borderedFont = ['[̲̅a]', '[̲̅b]', '[̲̅c]', '[̲̅d]', '[̲̅e]', '[̲̅f]', '[̲̅g]', '[̲̅h]', '[̲̅i]', '[̲̅j]', '[̲̅k]', '[̲̅l]', '[̲̅m]', '[̲̅n]', '[̲̅o]', '[̲̅p]', '[̲̅q]', '[̲̅r]', '[̲̅s]', '[̲̅t]', '[̲̅u]', '[̲̅v]', '[̲̅w]', '[̲̅x]', '[̲̅y]', '[̲̅z]', '[̲̅A]', '[̲̅B]', '[̲̅C]', '[̲̅D]', '[̲̅E]', '[̲̅F]', '[̲̅G]', '[̲̅H]', '[̲̅I]', '[̲̅J]', '[̲̅K]', '[̲̅L]', '[̲̅M]', '[̲̅N]', '[̲̅O]', '[̲̅P]', '[̲̅Q]', '[̲̅R]', '[̲̅S]', '[̲̅T]', '[̲̅U]', '[̲̅V]', '[̲̅W]', '[̲̅X]', '[̲̅Y]', '[̲̅Z]', '[̲̅0]', '[̲̅1]', '[̲̅2]', '[̲̅3]', '[̲̅4]', '[̲̅5]', '[̲̅6]', '[̲̅7]', '[̲̅8]', '[̲̅9]']


const wingDingsCharacters = ['🖉', '☺', '☻', '♥', '✂', '🕿', '🖂', '🖫', '☜', '☠']

let currentFont = defaultFont;
//Node
const { remote, ipcRenderer, webFrame, shell } = require('electron');
const path = require('path');
const app = remote.app;
var fs = require('fs');
const { Menu, MenuItem } = remote;

var win = remote.getCurrentWindow();


app.commandLine.appendSwitch('disable-pinch');


//File stuff
let prevSave = null
let openedFilePath = null
let displayPath = null

let spellcheck, listFormatting, statusBar, fullScreen
window.spellcheck = true
window.listFormatting = true
window.autocomplete = true
window.statusBar = true
window.fullScreen = false

//Declare elements from HTML file
const textarea = document.getElementById('textarea');
const menuButton = document.getElementById('menuButton');
const title = document.getElementById('title');
const header = document.getElementById('header');
const footer = document.getElementById('footer');

//Set size of components
function resize() {
    textarea.style.marginTop = String(Number(header.offsetHeight) + 10) + "px"
    textareaHeight = Number(window.innerHeight) - Number(footer.offsetHeight) - Number(header.offsetHeight) - 75
    textarea.style.height = String(textareaHeight) + 'px'
    textarea.style.width = String(Number(window.innerWidth) - 100) + "px"
    textarea.style.marginLeft = "25px"
    textarea.style.paddingLeft = "25px"
    textarea.style.paddingRight = "25px"
}

//Print
function printText() {
    var printContent = textarea.value.replace(/(\r\n|\n|\r)/gm, "<br>");
    var printFrm = document.createElement("iframe");
    printFrm.setAttribute("src", "data:text/html;charset=utf-8," + printContent);
    printFrm.setAttribute("id", "printFrm");
    printFrm.style.width = "0";
    printFrm.style.height = "0";
    document.body.appendChild(printFrm);
    document.getElementById("printFrm").contentWindow.print();
    setTimeout(function() { document.body.removeChild(document.getElementById("printFrm")); }, 100);
}

//File Handling
//Save as
function saveAs() {
    ipcRenderer.on('filePath', (event, arg) => {
        let filePath = arg;
        fs.writeFile(filePath, textarea.value, (error) => {
            console.log(error)
        })
    })
    ipcRenderer.send('saveFile')
}
//Open Files
function open(filePath) {
    try {
        fs.readFile(filePath, (err, data) => {
            textarea.value = data.toString();
            window[prevSave] = data.toString();
            window[displayPath] = filePath.replace(app.getPath('home'), '');
            document.getElementById('currentlyOpen').innerHTML = window[displayPath];
            wordCount()
            menu.getMenuItemById('fileExplorer').enabled = true
        })
    } catch (err) {
        console.log('err')
    }
}
//Open file dialog
function openFile() {
    //Open Dialog
    ipcRenderer.on('filePath', (event, arg) => {
        let filePath = arg[0]
        open(filePath)
    })
    ipcRenderer.send('openFile')
}
//Save files
function saveFile() {
    if (window[openedFilePath] != null) {
        //If file exists
        console.log('saving')
        fs.writeFile(app.getPath('home') + window[displayPath], textarea.value, (error) => {
            console.log('saved')
            document.getElementById('currentlyOpen').innerHTML = window[displayPath];
        })
    } else {
        //If file does not exist
        console.log('create')
        ipcRenderer.on('filePath', (event, arg) => {
            let filePath = arg;
            fs.writeFile(filePath, textarea.value, (error) => {
                window[prevSave] = textarea.value;
                window[displayPath] = filePath.replace(app.getPath('home'), '');
                document.getElementById('currentlyOpen').innerHTML = window[displayPath];

            })
        })
        ipcRenderer.send('saveFile')
    }
}
//Document Info
function wordCount() {
    let wordcount = textarea.value.split(/[^\s]+\s+/g).length - 1
    let charCount = textarea.value.split(/\s/).join('').length
    document.getElementById('docInfo').innerHTML = "Words: " + wordcount + " | Characters: " + charCount + " | UTF-8";
}

//Change Fonts
function changeFont(font) {
    prevFont = currentFont;
    currentFont = font;
    let selected = window.getSelection().toString()
    if (font == boldFont) {
        menu.getMenuItemById('bold').checked = true
    }
    if (font == italicFont) {
        menu.getMenuItemById('italic').checked = true
    }
    if (font == defaultFont) {
        menu.getMenuItemById('default').checked = true
    }
}
//Create email
function sendEmail() {
    var subject = "Contents of " + window[displayPath];
    var emailBody = encodeURI(decodeURI(textarea.value) + "\n\n\ncreated in NXT Editor");
    document.location = "mailto: ?subject=" + subject + "&body=" + emailBody;
}
//Window 
//Close Window
function quit() {
    remote.BrowserWindow.getFocusedWindow().close();
}
//Minimize
function min() {
    remote.BrowserWindow.getFocusedWindow().minimize();
}
//Create new window
function newWindow() {
    ipcRenderer.send('newWindow')
}
//Zoomfunctions
function defaultZoom() {
    textarea.style.fontSize = "14px";
}

function zoom(direction) {
    textarea.style.fontSize = String(parseInt(textarea.style.fontSize.replace('px', '')) + (direction * 2)) + "px";
}

//Open file in file explorer
function openInExplorer() {
    shell.showItemInFolder(app.getPath('home') + window[displayPath])
}

//Enable and disable spellcheck
function spellCheck() {
    window.spellcheck = !window.spellcheck
    textarea.spellcheck = window.spellcheck
    menu.getMenuItemById('spellcheck').checked = window.spellcheck
    text = textarea.value
    textarea.value = ''
    textarea.value = text
}

//Toggle list formatting
function listFormat() {
    window.listFormatting = !window.listFormatting
    menu.getMenuItemById('listFormat').checked = window.listFormatting
}

//Toggle autocomplete
function toggleAutcomplete() {
    window.autocomplete = !window.autocomplete
    menu.getMenuItemById('autocomplete').checked = window.autocomplete
}

//TOggle status bar
function toggleStatusBar() {
    let footer = document.getElementById('footer')
    window.statusBar = !window.statusBar
    if (window.statusBar) {
        footer.style.display = 'block'
    } else {
        footer.style.display = 'none'
    }
    menu.getMenuItemById('statusbar').checked = window.statusBar
}

//Toggle fullscreen
function toggleFullScreen() {
    window.fullScreen = !window.fullScreen;
    win.setFullScreen(window.fullScreen);
    menu.getMenuItemById('fullscreen').checked = window.fullScreen
}
//Context menu
win.webContents.on('context-menu', (event, params) => {
    const menu = new Menu()
    if (window.spellcheck) {
        for (const suggestion of params.dictionarySuggestions) {
            menu.append(new MenuItem({
                label: suggestion,
                click: () => win.webContents.replaceMisspelling(suggestion)
            }))

        }

        if (params.misspelledWord) {
            menu.append(
                new MenuItem({
                    label: 'Add to dictionary',
                    click: () => win.webContents.session.addWordToSpellCheckerDictionary(params.misspelledWord)
                })
            )

        }
        menu.append(new MenuItem({ type: 'separator' }))
    }
    menu.append(new MenuItem({ role: 'cut' }))
    menu.append(new MenuItem({ role: 'copy' }))
    menu.append(new MenuItem({ role: 'paste' }))
    menu.append(new MenuItem({ role: 'delete' }))
    menu.append(new MenuItem({ type: 'separator' }))
    menu.append(new MenuItem({ label: 'Zoom In', accelerator: 'Ctrl+=', click: () => { zoom(1) } }))
    menu.append(new MenuItem({ label: 'Zoom Out', accelerator: 'Ctrl+-', click: () => { zoom(-1) } }))
    menu.append(new MenuItem({ label: 'Default Zoom', click: () => { defaultZoom() } }))
    menu.append(new MenuItem({ type: 'separator' }))
    menu.append(new MenuItem({
        label: 'Insert',
        submenu: [{
                label: 'Mathematical',
                submenu: [
                    { label: '𝑥', click: () => document.execCommand('insertText', false, '𝑥') },
                    { label: '𝑦', click: () => document.execCommand('insertText', false, '𝑦') },
                    { label: 'π', click: () => document.execCommand('insertText', false, 'π') },
                    { label: '÷', click: () => document.execCommand('insertText', false, '÷') },
                    { label: '×', click: () => document.execCommand('insertText', false, '×') },
                    { label: '²', click: () => document.execCommand('insertText', false, '²') },
                    { label: '³', click: () => document.execCommand('insertText', false, '³') },
                    { label: '√', click: () => document.execCommand('insertText', false, '√') },
                    { label: '∛', click: () => document.execCommand('insertText', false, '∛') },
                    { label: '∞', click: () => document.execCommand('insertText', false, '∞') },
                    { label: '≠', click: () => document.execCommand('insertText', false, '≠') },
                    { label: '≤', click: () => document.execCommand('insertText', false, '≤') },
                    { label: '≥', click: () => document.execCommand('insertText', false, '≥') },
                    { label: '±', click: () => document.execCommand('insertText', false, '±') },
                    { label: '∓', click: () => document.execCommand('insertText', false, '∓') },
                    { label: '∩', click: () => document.execCommand('insertText', false, '∩') },
                    { label: '∪', click: () => document.execCommand('insertText', false, '∪') },
                    { label: '⊂', click: () => document.execCommand('insertText', false, '⊂') },
                    { label: '≈', click: () => document.execCommand('insertText', false, '≈') },
                    { label: '°', click: () => document.execCommand('insertText', false, '°') },
                    { label: '∠', click: () => document.execCommand('insertText', false, '∠') },
                    { label: '∴', click: () => document.execCommand('insertText', false, '∴') }
                ]
            }, {
                label: 'Roman Numerals',
                submenu: [
                    { label: 'Ⅰ', click: () => document.execCommand('insertText', false, 'Ⅰ') },
                    { label: 'Ⅱ', click: () => document.execCommand('insertText', false, 'Ⅱ') },
                    { label: 'Ⅲ', click: () => document.execCommand('insertText', false, 'Ⅲ') },
                    { label: 'Ⅳ', click: () => document.execCommand('insertText', false, 'Ⅳ') },
                    { label: 'Ⅴ', click: () => document.execCommand('insertText', false, 'Ⅴ') },
                    { label: 'Ⅵ', click: () => document.execCommand('insertText', false, 'Ⅵ') },
                    { label: 'Ⅶ', click: () => document.execCommand('insertText', false, 'Ⅶ') },
                    { label: 'Ⅷ', click: () => document.execCommand('insertText', false, 'Ⅷ') },
                    { label: 'Ⅸ', click: () => document.execCommand('insertText', false, 'Ⅸ') },
                    { label: 'Ⅹ', click: () => document.execCommand('insertText', false, 'Ⅹ') },
                    { label: 'Ⅺ', click: () => document.execCommand('insertText', false, 'Ⅺ') },
                    { label: 'Ⅻ', click: () => document.execCommand('insertText', false, 'Ⅻ') },
                    { label: 'ⅰ', click: () => document.execCommand('insertText', false, 'ⅰ') },
                    { label: 'ⅱ', click: () => document.execCommand('insertText', false, 'ⅱ') },
                    { label: 'ⅲ', click: () => document.execCommand('insertText', false, 'ⅲ') },
                    { label: 'ⅳ', click: () => document.execCommand('insertText', false, 'ⅳ') },
                    { label: 'ⅴ', click: () => document.execCommand('insertText', false, 'ⅴ') },
                    { label: 'ⅵ', click: () => document.execCommand('insertText', false, 'ⅵ') },
                    { label: 'ⅶ', click: () => document.execCommand('insertText', false, 'ⅶ') },
                    { label: 'ⅷ', click: () => document.execCommand('insertText', false, 'ⅷ') },
                    { label: 'ⅸ', click: () => document.execCommand('insertText', false, 'ⅸ') },
                    { label: 'ⅹ', click: () => document.execCommand('insertText', false, 'ⅹ') },
                    { label: 'ⅺ', click: () => document.execCommand('insertText', false, 'ⅺ') },
                    { label: 'ⅻ', click: () => document.execCommand('insertText', false, 'ⅻ') }
                ]
            }, {
                label: 'Technical',
                submenu: [
                    { label: '⏎', click: () => document.execCommand('insertText', false, '⏎') },
                    { label: '⇧', click: () => document.execCommand('insertText', false, '⇧') },
                    { label: '⏏', click: () => document.execCommand('insertText', false, '⏏') },
                    { label: '⌘', click: () => document.execCommand('insertText', false, '⌘') },
                    { label: '⌥', click: () => document.execCommand('insertText', false, '⌥') },
                    { label: '⌫', click: () => document.execCommand('insertText', false, '⌫') }
                ]
            }, {
                label: 'General WingDings',
                submenu: [
                    { label: '🖉', click: () => document.execCommand('insertText', false, '🖉') },
                    { label: '✂', click: () => document.execCommand('insertText', false, '✂') },
                    { label: '🕭', click: () => document.execCommand('insertText', false, '🕭') },
                    { label: '🕮', click: () => document.execCommand('insertText', false, '🕮') },
                    { label: '🕯', click: () => document.execCommand('insertText', false, '🕯') },
                    { label: '🕿', click: () => document.execCommand('insertText', false, '🕿') },
                    { label: '🖂', click: () => document.execCommand('insertText', false, '🖂') },
                    { label: '🖃', click: () => document.execCommand('insertText', false, '🖃') },
                    { label: '🗏', click: () => document.execCommand('insertText', false, '🗏') },
                    { label: '🗐', click: () => document.execCommand('insertText', false, '🗐') },
                    { label: '🗄', click: () => document.execCommand('insertText', false, '🗄') },
                    { label: '🖮', click: () => document.execCommand('insertText', false, '🖮') },
                    { label: '🖰', click: () => document.execCommand('insertText', false, '🖰') },
                    { label: '🖳', click: () => document.execCommand('insertText', false, '🖳') },
                    { label: '🖫', click: () => document.execCommand('insertText', false, '🖫') },
                    { label: '🖎', click: () => document.execCommand('insertText', false, '🖎') },
                    { label: '☜', click: () => document.execCommand('insertText', false, '☜') },
                    { label: '☞', click: () => document.execCommand('insertText', false, '☞') },
                    { label: '☠', click: () => document.execCommand('insertText', false, '☠') },
                    { label: '🏳', click: () => document.execCommand('insertText', false, '🏳') }
                ]
            }, {
                label: 'Chess',
                submenu: [
                    { label: '♔', click: () => document.execCommand('insertText', false, '♔') },
                    { label: '♕', click: () => document.execCommand('insertText', false, '♕') },
                    { label: '♖', click: () => document.execCommand('insertText', false, '♖') },
                    { label: '♗', click: () => document.execCommand('insertText', false, '♗') },
                    { label: '♘', click: () => document.execCommand('insertText', false, '♘') },
                    { label: '♙', click: () => document.execCommand('insertText', false, '♙') },
                    { label: '♚', click: () => document.execCommand('insertText', false, '♚') },
                    { label: '♛', click: () => document.execCommand('insertText', false, '♛') },
                    { label: '♜', click: () => document.execCommand('insertText', false, '♜') },
                    { label: '♝', click: () => document.execCommand('insertText', false, '♝') },
                    { label: '♞', click: () => document.execCommand('insertText', false, '♞') },
                    { label: '♟', click: () => document.execCommand('insertText', false, '♟') }

                ]
            }, {
                label: 'Music',
                submenu: [
                    { label: '♩', click: () => document.execCommand('insertText', false, '♩') },
                    { label: '♪', click: () => document.execCommand('insertText', false, '♪') },
                    { label: '♫', click: () => document.execCommand('insertText', false, '♫') },
                    { label: '♬', click: () => document.execCommand('insertText', false, '♬') },
                    { label: '♭', click: () => document.execCommand('insertText', false, '♭') },
                    { label: '♮', click: () => document.execCommand('insertText', false, '♮') },
                    { label: '♯', click: () => document.execCommand('insertText', false, '♯') },
                    { label: '𝄞', click: () => document.execCommand('insertText', false, '𝄞') },
                    { label: '𝄢', click: () => document.execCommand('insertText', false, '𝄢') }
                ]
            }, {
                label: 'Cards And Dice',
                submenu: [
                    { label: '♡', click: () => document.execCommand('insertText', false, '♡') },
                    { label: '♢', click: () => document.execCommand('insertText', false, '♢') },
                    { label: '♤', click: () => document.execCommand('insertText', false, '♤') },
                    { label: '♧', click: () => document.execCommand('insertText', false, '♧') },
                    { label: '♣', click: () => document.execCommand('insertText', false, '♣') },
                    { label: '♦', click: () => document.execCommand('insertText', false, '♦') },
                    { label: '♥', click: () => document.execCommand('insertText', false, '♥') },
                    { label: '♠', click: () => document.execCommand('insertText', false, '♠') },
                    { label: '⚀', click: () => document.execCommand('insertText', false, '⚀') },
                    { label: '⚁', click: () => document.execCommand('insertText', false, '⚁') },
                    { label: '⚂', click: () => document.execCommand('insertText', false, '⚂') },
                    { label: '⚃', click: () => document.execCommand('insertText', false, '⚃') },
                    { label: '⚄', click: () => document.execCommand('insertText', false, '⚄') },
                    { label: '⚅', click: () => document.execCommand('insertText', false, '⚅') }
                ]
            }, {
                label: 'Animals',
                submenu: [
                    { label: '𓃠', click: () => document.execCommand('insertText', false, '𓃠') },
                    { label: '𓃰', click: () => document.execCommand('insertText', false, '𓃰') },
                    { label: '𓃱', click: () => document.execCommand('insertText', false, '𓃱') },
                    { label: '𓃯', click: () => document.execCommand('insertText', false, '𓃯') },
                    { label: '𓃸', click: () => document.execCommand('insertText', false, '𓃸') },
                    { label: '𓃗', click: () => document.execCommand('insertText', false, '𓃗') },
                    { label: '𓃟', click: () => document.execCommand('insertText', false, '𓃟') },
                    { label: '𓃒', click: () => document.execCommand('insertText', false, '𓃒') },
                    { label: '𓃡', click: () => document.execCommand('insertText', false, '𓃡') },
                    { label: '𓃹', click: () => document.execCommand('insertText', false, '𓃹') },
                    { label: '𓆉', click: () => document.execCommand('insertText', false, '𓆉') },
                    { label: '𓆣', click: () => document.execCommand('insertText', false, '𓆣') },
                    { label: '𓆦', click: () => document.execCommand('insertText', false, '𓆦') },
                    { label: '𓆨', click: () => document.execCommand('insertText', false, '𓆨') },
                    { label: '𓆛', click: () => document.execCommand('insertText', false, '𓆛') },
                    { label: '𓆟', click: () => document.execCommand('insertText', false, '𓆟') },
                    { label: '𓅃', click: () => document.execCommand('insertText', false, '𓅃') },
                    { label: '𓅰', click: () => document.execCommand('insertText', false, '𓅰') }
                ]
            },
            {
                label: 'People',
                submenu: [
                    { label: '𓀞', click: () => document.execCommand('insertText', false, '𓀞') },
                    { label: '𓀟', click: () => document.execCommand('insertText', false, '𓀟') },
                    { label: '𓀠', click: () => document.execCommand('insertText', false, '𓀠') },
                    { label: '𓀡', click: () => document.execCommand('insertText', false, '𓀡') },
                    { label: '𓀤', click: () => document.execCommand('insertText', false, '𓀤') },
                    { label: '𓀥', click: () => document.execCommand('insertText', false, '𓀥') },
                    { label: '𓀦', click: () => document.execCommand('insertText', false, '𓀦') },
                    { label: '𓀉', click: () => document.execCommand('insertText', false, '𓀉') },
                    { label: '𓀒', click: () => document.execCommand('insertText', false, '𓀒') },
                    { label: '𓀗', click: () => document.execCommand('insertText', false, '𓀗') },
                    { label: '𓁅', click: () => document.execCommand('insertText', false, '𓁅') },
                    { label: '𓁈', click: () => document.execCommand('insertText', false, '𓁈') }
                ]
            },
            {
                label: 'Weather',
                submenu: [
                    { label: 'ϟ', click: () => document.execCommand('insertText', false, 'ϟ') },
                    { label: '☀', click: () => document.execCommand('insertText', false, '☀') },
                    { label: '☁', click: () => document.execCommand('insertText', false, '☁') },
                    { label: '☂', click: () => document.execCommand('insertText', false, '☂') },
                    { label: '☃', click: () => document.execCommand('insertText', false, '☃') },
                    { label: '☄', click: () => document.execCommand('insertText', false, '☄') },
                    { label: '☼', click: () => document.execCommand('insertText', false, '☼') },
                    { label: '☾', click: () => document.execCommand('insertText', false, '☾') },
                    { label: '☽', click: () => document.execCommand('insertText', false, '☽') },
                    { label: '❄', click: () => document.execCommand('insertText', false, '❄') },
                    { label: '❆', click: () => document.execCommand('insertText', false, '❆') }
                ]
            }
        ]
    }));
    menu.popup()
})

//Create menu
const menu = new Menu()
menu.append(new MenuItem({
    label: 'File',
    submenu: [
        { label: 'Save', accelerator: 'CmdOrCtrl+S', click: () => { saveFile() } },
        { label: 'Open', accelerator: 'CmdOrCtrl+O', click: () => { openFile() } },
        { label: 'Save As', click: () => { saveAs() } },
        { type: 'separator' },
        { label: 'Send In Email', click: () => { sendEmail() } },
        { label: 'Print', accelerator: 'CmdOrCtrl+P', click: () => { printText() } },
        { type: 'separator' },
        { label: 'Reveal In File Explorer', id: 'fileExplorer', enabled: false, accelerator: 'CmdOrCtrl+E', click: () => { openInExplorer() } },
        { type: 'separator' },
        { label: 'Quit', accelerator: 'Alt+F4', click: () => { quit() } }
    ]
}))
menu.append(new MenuItem({
    label: 'Window',
    submenu: [
        { label: 'New Window', accelerator: 'CmdOrCtrl+N', click: () => { newWindow() } },
        { label: 'Show inspector', click: () => { win.webContents.openDevTools() } },
        { type: 'separator' },
        { label: 'Minimize Window', accelerator: 'CmdOrCtrl+H', click: () => { min() } },
        { label: 'Close Window', accelerator: 'CmdOrCtrl+Q', click: () => { quit() } },
        { label: 'Fullscreen', id: 'fullscreen', accelerator: 'CmdOrCtrl+F', type: 'checkbox', click: () => { toggleFullScreen() }, checked: false },
        { type: 'separator' },
        { label: 'Spellcheck', id: 'spellcheck', accelerator: 'Alt+S', type: 'checkbox', click: () => { spellCheck() }, checked: true }
    ]
}))
menu.append(new MenuItem({
    label: 'View',
    submenu: [
        { label: 'Zoom In', accelerator: 'Ctrl+=', click: () => { zoom(1) } },
        { label: 'Zoom Out', accelerator: 'Ctrl+-', click: () => { zoom(-1) } },
        { label: 'Default Zoom', click: () => { defaultZoom() } },
        { type: 'separator' },
        { label: 'Status Bar', id: 'statusbar', accelerator: 'Alt+B', type: 'checkbox', click: () => { toggleStatusBar() }, checked: true }
    ]
}))
menu.append(new MenuItem({ type: 'separator' }))
menu.append(new MenuItem({
    label: 'Edit',
    submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' }
    ]
}));
menu.append(new MenuItem({ type: 'separator' }))
menu.append(new MenuItem({
    label: 'Format',
    submenu: [
        { label: 'Clear Window', accelerator: 'Alt+Backspace', click: () => { textarea.value = "" } },
        { label: 'Autocomplete', id: 'autocomplete', accelerator: 'Alt+C', type: 'checkbox', click: () => { toggleAutcomplete() }, checked: true },
        { label: 'List Formatting', id: 'listFormat', accelerator: 'Alt+L', type: 'checkbox', click: () => { listFormat() }, checked: true }
    ]
}))
menu.append(new MenuItem({ type: 'separator' }))
menu.append(new MenuItem({
    label: 'Insert',
    submenu: [{
            label: 'Mathematical',
            submenu: [
                { label: '𝑥', click: () => document.execCommand('insertText', false, '𝑥') },
                { label: '𝑦', click: () => document.execCommand('insertText', false, '𝑦') },
                { label: 'π', click: () => document.execCommand('insertText', false, 'π') },
                { label: '÷', click: () => document.execCommand('insertText', false, '÷') },
                { label: '×', click: () => document.execCommand('insertText', false, '×') },
                { label: '²', click: () => document.execCommand('insertText', false, '²') },
                { label: '³', click: () => document.execCommand('insertText', false, '³') },
                { label: '√', click: () => document.execCommand('insertText', false, '√') },
                { label: '∛', click: () => document.execCommand('insertText', false, '∛') },
                { label: '∞', click: () => document.execCommand('insertText', false, '∞') },
                { label: '≠', click: () => document.execCommand('insertText', false, '≠') },
                { label: '≤', click: () => document.execCommand('insertText', false, '≤') },
                { label: '≥', click: () => document.execCommand('insertText', false, '≥') },
                { label: '±', click: () => document.execCommand('insertText', false, '±') },
                { label: '∓', click: () => document.execCommand('insertText', false, '∓') },
                { label: '∩', click: () => document.execCommand('insertText', false, '∩') },
                { label: '∪', click: () => document.execCommand('insertText', false, '∪') },
                { label: '⊂', click: () => document.execCommand('insertText', false, '⊂') },
                { label: '≈', click: () => document.execCommand('insertText', false, '≈') },
                { label: '°', click: () => document.execCommand('insertText', false, '°') },
                { label: '∠', click: () => document.execCommand('insertText', false, '∠') },
                { label: '∴', click: () => document.execCommand('insertText', false, '∴') }
            ]
        }, {
            label: 'Roman Numerals',
            submenu: [
                { label: 'Ⅰ', click: () => document.execCommand('insertText', false, 'Ⅰ') },
                { label: 'Ⅱ', click: () => document.execCommand('insertText', false, 'Ⅱ') },
                { label: 'Ⅲ', click: () => document.execCommand('insertText', false, 'Ⅲ') },
                { label: 'Ⅳ', click: () => document.execCommand('insertText', false, 'Ⅳ') },
                { label: 'Ⅴ', click: () => document.execCommand('insertText', false, 'Ⅴ') },
                { label: 'Ⅵ', click: () => document.execCommand('insertText', false, 'Ⅵ') },
                { label: 'Ⅶ', click: () => document.execCommand('insertText', false, 'Ⅶ') },
                { label: 'Ⅷ', click: () => document.execCommand('insertText', false, 'Ⅷ') },
                { label: 'Ⅸ', click: () => document.execCommand('insertText', false, 'Ⅸ') },
                { label: 'Ⅹ', click: () => document.execCommand('insertText', false, 'Ⅹ') },
                { label: 'Ⅺ', click: () => document.execCommand('insertText', false, 'Ⅺ') },
                { label: 'Ⅻ', click: () => document.execCommand('insertText', false, 'Ⅻ') },
                { label: 'ⅰ', click: () => document.execCommand('insertText', false, 'ⅰ') },
                { label: 'ⅱ', click: () => document.execCommand('insertText', false, 'ⅱ') },
                { label: 'ⅲ', click: () => document.execCommand('insertText', false, 'ⅲ') },
                { label: 'ⅳ', click: () => document.execCommand('insertText', false, 'ⅳ') },
                { label: 'ⅴ', click: () => document.execCommand('insertText', false, 'ⅴ') },
                { label: 'ⅵ', click: () => document.execCommand('insertText', false, 'ⅵ') },
                { label: 'ⅶ', click: () => document.execCommand('insertText', false, 'ⅶ') },
                { label: 'ⅷ', click: () => document.execCommand('insertText', false, 'ⅷ') },
                { label: 'ⅸ', click: () => document.execCommand('insertText', false, 'ⅸ') },
                { label: 'ⅹ', click: () => document.execCommand('insertText', false, 'ⅹ') },
                { label: 'ⅺ', click: () => document.execCommand('insertText', false, 'ⅺ') },
                { label: 'ⅻ', click: () => document.execCommand('insertText', false, 'ⅻ') }
            ]
        }, {
            label: 'Technical',
            submenu: [
                { label: '⏎', click: () => document.execCommand('insertText', false, '⏎') },
                { label: '⇧', click: () => document.execCommand('insertText', false, '⇧') },
                { label: '⏏', click: () => document.execCommand('insertText', false, '⏏') },
                { label: '⌘', click: () => document.execCommand('insertText', false, '⌘') },
                { label: '⌥', click: () => document.execCommand('insertText', false, '⌥') },
                { label: '⌫', click: () => document.execCommand('insertText', false, '⌫') }
            ]
        }, {
            label: 'General WingDings',
            submenu: [
                { label: '🖉', click: () => document.execCommand('insertText', false, '🖉') },
                { label: '✂', click: () => document.execCommand('insertText', false, '✂') },
                { label: '🕭', click: () => document.execCommand('insertText', false, '🕭') },
                { label: '🕮', click: () => document.execCommand('insertText', false, '🕮') },
                { label: '🕯', click: () => document.execCommand('insertText', false, '🕯') },
                { label: '🕿', click: () => document.execCommand('insertText', false, '🕿') },
                { label: '🖂', click: () => document.execCommand('insertText', false, '🖂') },
                { label: '🖃', click: () => document.execCommand('insertText', false, '🖃') },
                { label: '🗏', click: () => document.execCommand('insertText', false, '🗏') },
                { label: '🗐', click: () => document.execCommand('insertText', false, '🗐') },
                { label: '🗄', click: () => document.execCommand('insertText', false, '🗄') },
                { label: '🖮', click: () => document.execCommand('insertText', false, '🖮') },
                { label: '🖰', click: () => document.execCommand('insertText', false, '🖰') },
                { label: '🖳', click: () => document.execCommand('insertText', false, '🖳') },
                { label: '🖫', click: () => document.execCommand('insertText', false, '🖫') },
                { label: '🖎', click: () => document.execCommand('insertText', false, '🖎') },
                { label: '☜', click: () => document.execCommand('insertText', false, '☜') },
                { label: '☞', click: () => document.execCommand('insertText', false, '☞') },
                { label: '☠', click: () => document.execCommand('insertText', false, '☠') },
                { label: '🏳', click: () => document.execCommand('insertText', false, '🏳') }
            ]
        }, {
            label: 'Chess',
            submenu: [
                { label: '♔', click: () => document.execCommand('insertText', false, '♔') },
                { label: '♕', click: () => document.execCommand('insertText', false, '♕') },
                { label: '♖', click: () => document.execCommand('insertText', false, '♖') },
                { label: '♗', click: () => document.execCommand('insertText', false, '♗') },
                { label: '♘', click: () => document.execCommand('insertText', false, '♘') },
                { label: '♙', click: () => document.execCommand('insertText', false, '♙') },
                { label: '♚', click: () => document.execCommand('insertText', false, '♚') },
                { label: '♛', click: () => document.execCommand('insertText', false, '♛') },
                { label: '♜', click: () => document.execCommand('insertText', false, '♜') },
                { label: '♝', click: () => document.execCommand('insertText', false, '♝') },
                { label: '♞', click: () => document.execCommand('insertText', false, '♞') },
                { label: '♟', click: () => document.execCommand('insertText', false, '♟') }

            ]
        }, {
            label: 'Music',
            submenu: [
                { label: '♩', click: () => document.execCommand('insertText', false, '♩') },
                { label: '♪', click: () => document.execCommand('insertText', false, '♪') },
                { label: '♫', click: () => document.execCommand('insertText', false, '♫') },
                { label: '♬', click: () => document.execCommand('insertText', false, '♬') },
                { label: '♭', click: () => document.execCommand('insertText', false, '♭') },
                { label: '♮', click: () => document.execCommand('insertText', false, '♮') },
                { label: '♯', click: () => document.execCommand('insertText', false, '♯') },
                { label: '𝄞', click: () => document.execCommand('insertText', false, '𝄞') },
                { label: '𝄢', click: () => document.execCommand('insertText', false, '𝄢') }
            ]
        }, {
            label: 'Cards And Dice',
            submenu: [
                { label: '♡', click: () => document.execCommand('insertText', false, '♡') },
                { label: '♢', click: () => document.execCommand('insertText', false, '♢') },
                { label: '♤', click: () => document.execCommand('insertText', false, '♤') },
                { label: '♧', click: () => document.execCommand('insertText', false, '♧') },
                { label: '♣', click: () => document.execCommand('insertText', false, '♣') },
                { label: '♦', click: () => document.execCommand('insertText', false, '♦') },
                { label: '♥', click: () => document.execCommand('insertText', false, '♥') },
                { label: '♠', click: () => document.execCommand('insertText', false, '♠') },
                { label: '⚀', click: () => document.execCommand('insertText', false, '⚀') },
                { label: '⚁', click: () => document.execCommand('insertText', false, '⚁') },
                { label: '⚂', click: () => document.execCommand('insertText', false, '⚂') },
                { label: '⚃', click: () => document.execCommand('insertText', false, '⚃') },
                { label: '⚄', click: () => document.execCommand('insertText', false, '⚄') },
                { label: '⚅', click: () => document.execCommand('insertText', false, '⚅') }
            ]
        }, {
            label: 'Animals',
            submenu: [
                { label: '𓃠', click: () => document.execCommand('insertText', false, '𓃠') },
                { label: '𓃰', click: () => document.execCommand('insertText', false, '𓃰') },
                { label: '𓃱', click: () => document.execCommand('insertText', false, '𓃱') },
                { label: '𓃯', click: () => document.execCommand('insertText', false, '𓃯') },
                { label: '𓃸', click: () => document.execCommand('insertText', false, '𓃸') },
                { label: '𓃗', click: () => document.execCommand('insertText', false, '𓃗') },
                { label: '𓃟', click: () => document.execCommand('insertText', false, '𓃟') },
                { label: '𓃒', click: () => document.execCommand('insertText', false, '𓃒') },
                { label: '𓃡', click: () => document.execCommand('insertText', false, '𓃡') },
                { label: '𓃹', click: () => document.execCommand('insertText', false, '𓃹') },
                { label: '𓆉', click: () => document.execCommand('insertText', false, '𓆉') },
                { label: '𓆣', click: () => document.execCommand('insertText', false, '𓆣') },
                { label: '𓆦', click: () => document.execCommand('insertText', false, '𓆦') },
                { label: '𓆨', click: () => document.execCommand('insertText', false, '𓆨') },
                { label: '𓆛', click: () => document.execCommand('insertText', false, '𓆛') },
                { label: '𓆟', click: () => document.execCommand('insertText', false, '𓆟') },
                { label: '𓅃', click: () => document.execCommand('insertText', false, '𓅃') },
                { label: '𓅰', click: () => document.execCommand('insertText', false, '𓅰') }
            ]
        },
        {
            label: 'People',
            submenu: [
                { label: '𓀞', click: () => document.execCommand('insertText', false, '𓀞') },
                { label: '𓀟', click: () => document.execCommand('insertText', false, '𓀟') },
                { label: '𓀠', click: () => document.execCommand('insertText', false, '𓀠') },
                { label: '𓀡', click: () => document.execCommand('insertText', false, '𓀡') },
                { label: '𓀤', click: () => document.execCommand('insertText', false, '𓀤') },
                { label: '𓀥', click: () => document.execCommand('insertText', false, '𓀥') },
                { label: '𓀦', click: () => document.execCommand('insertText', false, '𓀦') },
                { label: '𓀉', click: () => document.execCommand('insertText', false, '𓀉') },
                { label: '𓀒', click: () => document.execCommand('insertText', false, '𓀒') },
                { label: '𓀗', click: () => document.execCommand('insertText', false, '𓀗') },
                { label: '𓁅', click: () => document.execCommand('insertText', false, '𓁅') },
                { label: '𓁈', click: () => document.execCommand('insertText', false, '𓁈') }
            ]
        },
        {
            label: 'Weather',
            submenu: [
                { label: 'ϟ', click: () => document.execCommand('insertText', false, 'ϟ') },
                { label: '☀', click: () => document.execCommand('insertText', false, '☀') },
                { label: '☁', click: () => document.execCommand('insertText', false, '☁') },
                { label: '☂', click: () => document.execCommand('insertText', false, '☂') },
                { label: '☃', click: () => document.execCommand('insertText', false, '☃') },
                { label: '☄', click: () => document.execCommand('insertText', false, '☄') },
                { label: '☼', click: () => document.execCommand('insertText', false, '☼') },
                { label: '☾', click: () => document.execCommand('insertText', false, '☾') },
                { label: '☽', click: () => document.execCommand('insertText', false, '☽') },
                { label: '❄', click: () => document.execCommand('insertText', false, '❄') },
                { label: '❆', click: () => document.execCommand('insertText', false, '❆') }
            ]
        }
    ]
}));
menu.append(new MenuItem({
    label: 'Fonts',
    submenu: [
        { label: 'Default', id: 'default', accelerator: 'Alt+N', type: 'radio', click: () => changeFont(defaultFont), checked: true },
        { label: '𝐁𝐨𝐥𝐝', id: 'bold', accelerator: 'CmdOrCtrl+B', type: 'radio', click: () => changeFont(boldFont) },
        { label: '𝘐𝘵𝘢𝘭𝘪𝘤', id: 'italic', accelerator: 'CmdOrCtrl+I', type: 'radio', click: () => changeFont(italicFont) },
        { label: '𝔊𝔬𝔱𝔥𝔦𝔠', type: 'radio', click: () => changeFont(gothicFont) },
        { label: '𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎', type: 'radio', click: () => changeFont(monospaceFont) },
        { label: '𝔻𝕠𝕦𝕓𝕝𝕖𝕊𝕥𝕣𝕦𝕔𝕜', type: 'radio', click: () => changeFont(doublestruckFont) },
        { label: '𝒞𝓊𝓇𝓈𝒾𝓋ℯ', type: 'radio', click: () => changeFont(cursiveFont) },
        { label: 'Яц$тїfч', type: 'radio', click: () => changeFont(rustifyFont) },
        { label: 'ֆօʀƈɛʀɛʀ', type: 'radio', click: () => changeFont(sorcererFont) },
        { label: 'Ⓒⓘⓡⓒⓛⓔⓓ', type: 'radio', click: () => changeFont(circledFont) },
        { label: '🅂🅀🅄🄰🅁🄴🄳', type: 'radio', click: () => changeFont(boxedFont) },
        { label: 'ᑕᑌᖇᐯEᗪ', type: 'radio', click: () => changeFont(curvedFont) },
        { label: '§צּm฿θĺ¡ς', type: 'radio', click: () => changeFont(symbolicFont) },
        { label: '🅽🅴🅶 🆂🆀🆄🅰🆁🅴🅳', type: 'radio', click: () => changeFont(negSquaredFont) },
        { label: '[̲̅B][̲̅o][̲̅r][̲̅d][̲̅e][̲̅r][̲̅e][̲̅d]', type: 'radio', click: () => changeFont(borderedFont) }
    ]
}));
menu.append(new MenuItem({ type: 'separator' }))
menu.append(new MenuItem({
    label: 'Help',
    submenu: [
        { label: 'Guide', click: () => { shell.openExternal('https://alexhawking.itch.io/nxt-editor') } },
        { label: 'Credits', click: () => { shell.openExternal('https://alexhawking.itch.io/') } }
    ]
}))

//Show Menu
menuButton.addEventListener('click', (e) => {
    textarea.focus()
    e.preventDefault();
    menu.popup({ window: remote.getCurrentWindow() });
}, false);

//Events

//Adjust window on resize
window.addEventListener('resize', function() {
    resize()
});

//Top Scroll bar
textarea.addEventListener('scroll', function() {
    var winScroll = textarea.scrollTop || textarea.scrollTop;
    var height = textarea.scrollHeight - textarea.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
})

textarea.addEventListener('keydown', function(e) {
    //Get Caret Positiob
    caretPosition = textarea.selectionStart;
    var str = textarea.value,
        bef = str.substr(0, caretPosition),
        aft = str.substr(caretPosition),
        lines = str.split("\n"),
        currentLineIndex = bef.trimRight().split(/\n/g).length

    //Unsaved stuff
    if (window[prevSave] == null) {} else
    if (window[prevSave] != textarea.value) {
        document.getElementById('currentlyOpen').innerHTML = '*' + window[displayPath]
    }

    //Insert WingDings
    if (e.altKey && (e.keyCode >= 48 & e.keyCode <= 57)) {
        e.preventDefault();
        document.execCommand('insertText', false, wingDingsCharacters[e.keyCode - 48]);
    }

    if (e.altKey && e.key === "Backspace") {
        textarea.value = ""
    }

    //Autocomplete Function
    function autocomplete(open, close) {
        textarea.focus();
        befAc = bef + open
        aftAc = close + aft
        textarea.value = befAc + aftAc;
        textarea.selectionEnd = caretPosition + 1;
    }
    if (e.keyCode === 9) {
        e.preventDefault();
        textarea.focus()
        document.execCommand('insertText', false, '   ');
    }
    console.log(window.autocomplete)
    if (window.autocomplete) {
        //Things to Autocomplete
        if (e.key === "(") {
            e.preventDefault()
            autocomplete('(', ')')
        } else if (e.key === "\"") {
            e.preventDefault()
            autocomplete('\"', '\"')
        } else if (e.key === "\'") {
            e.preventDefault()
            autocomplete('\'', '\'')
        } else if (e.key === "{") {
            e.preventDefault()
            autocomplete('{', '}')
        } else if (e.key === "[") {
            e.preventDefault()
            autocomplete('[', ']')
        }
    }
    if (e.code == "Minus" && e.ctrlKey) {
        e.preventDefault()
        zoom(-1)
    }

    if (e.code == "Equal" && e.ctrlKey) {
        e.preventDefault()
        zoom(1)
    }
    if (e.altKey && e.key == "b") {
        toggleStatusBar()
    }
    if (e.altKey && e.key == "c") {
        toggleAutcomplete()
    }
    if (e.altKey && e.key == "s") {
        spellCheck()
    }
    if (e.altKey && e.key == "n") {
        changeFont(defaultFont)
    }
    if (e.altKey && e.key == "l") {
        listFormat()
    }
    if (e.ctrlKey && e.key == "p") {
        printText()
    }
    if (e.ctrlKey && e.key == "f") {
        toggleFullScreen()
    }
    if (e.ctrlKey && e.key == "b") {
        changeFont(boldFont)
    }
    if (e.ctrlKey && e.key == "i") {
        changeFont(italicFont)
    }
    if (e.ctrlKey && e.key == "s") {
        saveFile()
    }
    if (e.ctrlKey && e.key == "o") {
        openFile()
    }
    if (e.ctrlKey && e.key == "n") {
        newWindow()
    }
    if (e.ctrlKey && e.key == "h") {
        min()
    }
    if (e.ctrlKey && e.key == "q") {
        quit()
    }

    //Fill in standard Text
    if (e.ctrlKey || e.altKey) {} else if ((event.getModifierState("CapsLock") || e.shiftKey) && (e.keyCode >= 65 & e.keyCode <= 90)) {
        e.preventDefault();
        document.execCommand('insertText', false, currentFont[e.keyCode - 65 + 26]);
    } else if (e.keyCode >= 65 & e.keyCode <= 90) {
        e.preventDefault();
        document.execCommand('insertText', false, currentFont[e.keyCode - 65]);
        //Numbers and special characters
    } else if (e.shiftKey) {} else if (e.keyCode >= 48 & e.keyCode <= 57) {
        e.preventDefault();
        document.execCommand('insertText', false, currentFont[e.keyCode - 48 + 52]);
    }

})


//List formatting
textarea.addEventListener('keyup', function(e) {
    wordCount()
    caretPosition = textarea.selectionStart;
    var str = textarea.value,
        bef = str.substr(0, caretPosition),
        aft = str.substr(caretPosition),
        lines = str.split("\n"),
        prevLineIndex = bef.trimRight().split(/\n/g).length - 1,
        currentLineIndex = bef.trimRight().split(/\n/g).length

    if (window.listFormatting) {
        if (e.keyCode === 13) {
            try {
                if (lines[prevLineIndex].trim()[0] === '-') {
                    document.execCommand('insertText', false, lines[prevLineIndex].substring(0, lines[prevLineIndex].indexOf('-')) + '- ')
                }
            } catch {
                console.log('First Line')
            }
        }
    }
})

//If application was opened with file
if (remote.process.argv[1]) {
    try {
        open(remote.process.argv[1])
    } catch (err) {
        console.log(err)
    }
}

textarea.style.fontSize = "14px"