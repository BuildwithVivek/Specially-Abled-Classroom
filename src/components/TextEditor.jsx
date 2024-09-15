import React, { useState, useRef } from 'react';
import './TextEditor.css';

const TextEditor = () => {
  const editorRef = useRef(null);

  const handleFormat = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
  };

  const handleDownload = () => {
    const content = editorRef.current ? editorRef.current.innerHTML : '';
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'document.txt';
    link.click();
  };

  const [editorContent, setEditorContent] = useState('');
  const [fontSize, setFontSize] = useState('medium');
  const [contrastMode, setContrastMode] = useState(false);
  const [colorInverseMode, setColorInverseMode] = useState(false);
  const [fontColor, setFontColor] = useState('#000000');

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  const toggleContrastMode = () => {
    setContrastMode(!contrastMode);
  };

  const toggleColorInverseMode = () => {
    setColorInverseMode(!colorInverseMode);
  };

  const handleFontColorChange = (color) => {
    setFontColor(color);
  };

  return (
    <div className={`text-editor ${contrastMode ? 'contrast-mode' : ''} ${colorInverseMode ? 'color-inverse-mode' : ''}`}>
      <div className="navv">
        <div className="ht"><h2>TEXT EDITOR  </h2></div>
        <div className="formatting-buttons">
          <button onClick={() => handleFontSizeChange('small')}>Sm</button>
          <button onClick={() => handleFontSizeChange('medium')}>Md</button>
          <button onClick={() => handleFontSizeChange('large')}>Lg</button>
          <button onClick={toggleContrastMode}>Contrast</button>
          <button onClick={toggleColorInverseMode}>Color Inverse</button>
          <input type="color" onChange={(e) => handleFontColorChange(e.target.value)} value={fontColor} />
          <button onClick={handleDownload}>Download</button>
        </div>
      </div>
      <div
        className="editor-content"
        style={{ fontSize, color: fontColor, background: contrastMode ? 'black' : 'white' }}
        contentEditable
        ref={editorRef}
        dangerouslySetInnerHTML={{ __html: editorContent }}
        onInput={(e) => setEditorContent(e.target.innerHTML)}
      />
    </div>
  );
};

export default TextEditor;
