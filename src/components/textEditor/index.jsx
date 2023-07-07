import React, { useState, useEffect } from 'react';
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert'; 
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';



const TextEditor = ({ sendChildToParent, description }) => {
  const HTML_WITHOUT_FIGURE = description === undefined ? '' : description;
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const htmlToDraftBlocks = (html) => {
    const blocksFromHtml = htmlToDraft(html);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorState = EditorState.createWithContent(contentState);

    sendChildToParent(convertToHTML(editorState.getCurrentContent()));
    setEditorState(editorState);
    return editorState;
  };

  useEffect(() => {
    htmlToDraftBlocks(HTML_WITHOUT_FIGURE);
  }, []);


  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  }

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    sendChildToParent(currentContentAsHTML);
  }

  return (
    <div className="container">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  );
};

export default TextEditor;