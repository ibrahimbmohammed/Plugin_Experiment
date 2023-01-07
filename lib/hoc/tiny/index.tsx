/* eslint-disable no-return-assign */

import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface TinyMceProps {
    onChange: any;
    value: any;
}

export default function TinyMce({ onChange, value }: TinyMceProps) {
    const editorRef = useRef<Editor>();

    return (
        <Editor
            // @ts-ignore
            onInit={(_evt, editor) => (editorRef.current = editor)}
            initialValue={value ?? '<p>This is the initial content of the editor.</p>'}
            init={{
                height: 500,
                menubar: false,
                table_toolbar:
                    'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                ],

                toolbar: [
                    { name: 'history', items: ['undo', 'redo'] },
                    { name: 'styles', items: ['styles'] },
                    { name: 'formatting', items: ['bold', 'italic'] },
                    {
                        name: 'alignment',
                        items: ['alignleft', 'aligncenter', 'alignright', 'alignjustify'],
                    },
                    { name: 'indentation', items: ['outdent', 'indent'] },
                ],

                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
            // @ts-ignore
            onChange={() => onChange(editorRef?.current?.getContent())}
        />
    );
}
