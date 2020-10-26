

function setDefault(){
    const defaultText = `\
# Mac Miller
 ## Most Dope
[Mac youtube page](https://www.youtube.com/channel/UC3SEvBYhullC-aaEmbEQflg).

 <dl>
    <dt>Definition list</dt>
         <dd>KIDS.</dd>

        <dt>Markdown in HTML</dt>
    <dd> tribute to Mac Miller.</dd>
</dl>

\`Rest in peace\`

\`\`\`
 Still got my training wheels in the garage.
\`\`\`

- circles
- swimming
- the divine feminine
            
> You're like the lyrics to my favorite song. You stick with me all day long. And when I reach the end I wanna hear it again.

**They can't understand my concept.**

![Mac imagge](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcelebrityinsider.org%2Fwp-content%2Fuploads%2F2018%2F11%2FMac-Miller-RapBasement.com_-e1541450379851.jpg&amp;f=1&amp;nofb=1)
       
    `;
            
    

    const editorText = document.getElementById("editor");
    editorText.value = defaultText;
    const previewDisplay = document.getElementById("preview");
    previewDisplay.innerHTML = marked(defaultText); 

}





function previewUpdate() {
    const editorValue = document.getElementById("editor").value;
    const previewDisplay = document.getElementById("preview");

    previewDisplay.innerHTML = marked(editorValue);
}