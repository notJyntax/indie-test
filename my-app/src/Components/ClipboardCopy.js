export default function ClipboardCopy() {
    const CopyLink = text => {
      if (!document.queryCommandSupported("copy")) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.")
      }
  
      const textArea = document.createElement("textarea")
      textArea.value = text
      textArea.style.top = 0
      textArea.style.left = 0
      textArea.style.display = "fixed"
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      alert("클립보드에 복사되었습니다.")
    }
  
    return (
      <button className="CopyLinkBtn" onClick={() => CopyLink(window.location.href)}>copy link</button>
    )
  }
  