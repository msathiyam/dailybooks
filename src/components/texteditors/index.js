// // import { addClass, Browser, removeClass } from '@syncfusion/ej2-base';
// // import { ChangeEventArgs as checked, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
// // import { ChangeEventArgs, DropDownListComponent, FieldSettingsModel } from '@syncfusion/ej2-react-dropdowns';
// // import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, ToolbarSettingsModel, ToolbarType } from '@syncfusion/ej2-react-richtexteditor';
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// // import { PropertyPane } from '../common/property-pane';
// // import './types.css';
// function Type() {
//     // let rteObj: RichTextEditorComponent;
//     // let listObj: DropDownListComponent;
//     // let checkboxObj: CheckBoxComponent;
//     // Rich Text Editor items list
//     const items = ['Bold', 'Italic', 'Underline', 'StrikeThrough',
//         'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
//         'LowerCase', 'UpperCase', '|',
//         'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
//         'Outdent', 'Indent', '|',
//         'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
//         'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'];
//     //Rich Text Editor ToolbarSettings
//     const toolbarSettings = {
//         type: ToolbarType.Expand,
//         items: items,
//         enableFloating: false
//     };
//     function onChange() {
//         switch (value) {
//             case '1':
//                 toolbarSettings.type = ToolbarType.Expand;
//                 break;
//             case '2':
//                 toolbarSettings.type = ToolbarType.MultiRow;
//                 break;
//         }
//     }
//     // function onFloatChange(args: checked): void {
//     //     rteObj.toolbarSettings.enableFloating = args.checked;
//     // }
//     // const ddlValue: { [key: string]: Object }[] = [
//     //     { Id: '1', Text: 'Expand' },
//     //     { Id: '2', Text: 'MultiRow' }
//     // ];
//     // maps the appropriate column to fields property
//     // const fields: FieldSettingsModel = { text: 'Text', value: 'Id' };
//     // set the value to select an item based on mapped value at initial rendering
//     // const ddlSelectedValue: string = '1';
//     function handleFullScreen(e) {
//         // let sbCntEle: HTMLElement = document.querySelector('.sb-content.e-view');
//         // let sbHdrEle: HTMLElement = document.querySelector('.sb-header.e-view');
//         // let leftBar: HTMLElement;
//         // let transformElement: HTMLElement;
//         // if (Browser.isDevice) {
//         //     leftBar = document.querySelector('#right-sidebar');
//         //     transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');
//         // } else {
//         //     leftBar = document.querySelector('#left-sidebar');
//         //     transformElement = document.querySelector('#right-pane');
//         // }
//         // if (e.targetItem === 'Maximize') {
//         //     if (Browser.isDevice && Browser.isIos) {
//         //         addClass([sbCntEle, sbHdrEle], ['hide-header']);
//         //     }
//         //     addClass([leftBar], ['e-close']);
//         //     removeClass([leftBar], ['e-open']);
//         //     if (!Browser.isDevice) { transformElement.style.marginLeft = '0px'; }
//         //     transformElement.style.transform = 'inherit';
//         // } else if (e.targetItem === 'Minimize') {
//         //     if (Browser.isDevice && Browser.isIos) {
//         //         removeClass([sbCntEle, sbHdrEle], ['hide-header']);
//         //     }
//         //     removeClass([leftBar], ['e-close']);
//         //     if (!Browser.isDevice) {
//         //         addClass([leftBar], ['e-open']);
//         //         transformElement.style.marginLeft = leftBar.offsetWidth + 'px';
//         //     }
//         //     transformElement.style.transform = 'translateX(0px)';
//         // }
//     }
//     function actionCompleteHandler() {
//         setTimeout(() => { (rteObj ).toolbarModule.refreshToolbarOverflow(); }, 400);
//     }
//     return (
//         <div className='control-pane'>
//             <div className='control-section' id='rteTypes'>
//                 <div className='col-lg-8' style={{ paddingBottom: '20px' }}>
//                     <RichTextEditorComponent id="typesRTE" ref={(scope) => { rteObj = scope; }}
//                         floatingToolbarOffset={0} toolbarSettings={toolbarSettings}
//                         actionBegin={handleFullScreen.bind(this)} actionComplete={actionCompleteHandler.bind(this)}>
//                         <p>The Rich Text Editor is a WYSIWYG ("what you see is what you get") editor useful to create and edit content, and return the valid HTML markup or markdown of the content</p>
//                         <p><b>Toolbar</b></p>
//                         <ol>
//                             <li>
//                                 <p>The Toolbar contains commands to align the text, insert a link, insert an image, insert list, undo/redo operations, HTML view, etc </p>
//                             </li>
//                             <li>
//                                 <p>The Toolbar is fully customizable </p>
//                             </li>
//                         </ol>
//                         <p><b>Links</b></p>
//                         <ol>
//                             <li>
//                                 <p>You can insert a hyperlink with its corresponding dialog </p>
//                             </li>
//                             <li>
//                                 <p>Attach a hyperlink to the displayed text. </p>
//                             </li>
//                             <li>
//                                 <p>Customize the quick toolbar based on the hyperlink </p>
//                             </li>
//                         </ol>
//                         <p><b>Validation</b></p>
//                         <ul>
//                             <li>
//                                 <p>The editor’s content can be validated on form submission by applying validation rules and validation message</p>
//                             </li>
//                         </ul>
//                         <p><b>Locale.</b></p>
//                         <ul>
//                             <li>
//                                 <p>The editor provides an option to localize its static strings to adapt the editor to a local language.</p>
//                             </li>
//                         </ul>
//                         <p><b>Image.</b></p>
//                         <ol>
//                             <li>
//                                 <p>Allows you to insert images from an online source as well as the local computer </p>
//                             </li>
//                             <li>
//                                 <p>You can upload an image </p>
//                             </li>
//                             <li>
//                                 <p>Provides an option to customize the quick toolbar for an image </p>
//                             </li>
//                         </ol>
//                         <img alt="Logo" src="./src/rich-text-editor/images/RTEImage-Feather.png" />
//                         <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
//                     </RichTextEditorComponent>
//                 </div>
//                 <div className='col-lg-4 property-section'>
//                     <PropertyPane title='Properties'>
//                         <table id="property" title="Properties" style={{ width: '100%', margin: '10px' }}>
//                             <tbody>
//                                 <tr>
//                                     <td>
//                                         <div style={{ paddingLeft: '10px', paddingBottom: '10px' }}>
//                                             <DropDownListComponent id="types" dataSource={ddlValue} ref={(dropdownlist) => { listObj = dropdownlist }}
//                                                 fields={fields} change={onChange.bind(this)} floatLabelType='Auto'
//                                                 placeholder="Types" index={0} popupHeight='220px' />
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <div style={{ paddingLeft: '10px' }}>
//                                             <CheckBoxComponent checked={false} label='Enable Floating' ref={(scope) => { checkboxObj = scope; }} change={onFloatChange.bind(this)} ></CheckBoxComponent>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </PropertyPane>
//                 </div>
//             </div >
//         </div >
//     );
// }
// export default Type;