/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormHelperText,
  FormLabel,
  OutlinedInput,
} from '@material-ui/core';
import { EditorState, ContentState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import dynamic from 'next/dynamic';
import React, { ChangeEvent } from 'react';
import { useStyles } from './ui';
import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor';

const DraftJsEditor: any = dynamic(
  import('react-draft-wysiwyg').then((c) => c.Editor),
  {
    ssr: false,
  }
);

interface EditorProps {
  value: EditorState | null | '';
  onChange: (el: ChangeEvent) => void;
  error: boolean;
  helperText: string;
  label: string;
}

function WrappedEditor(props: any) {
  let value = props.value;
  if (typeof value === 'string') {
    const processedHTML = DraftPasteProcessor.processHTML(value);
    const contentState = ContentState.createFromBlockArray(processedHTML);
    value = EditorState.createWithContent(contentState);
    value = EditorState.moveFocusToEnd(value);
  }
  return (
    <DraftJsEditor editorState={value} onEditorStateChange={props.onChange} />
  );
}

export default function Editor(props: EditorProps) {
  const classes = useStyles();
  return (
    <FormControl error={props.error} className={classes.formControl}>
      <FormLabel className={classes.label}>{props.label}</FormLabel>
      <OutlinedInput
        value={props.value}
        onChange={props.onChange}
        className={classes.input}
        inputComponent={WrappedEditor as any}
      />
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </FormControl>
  );
}

export const editorStateToHTML = (state: EditorState) => {
  if (state?.getCurrentContent) {
    return stateToHTML(state.getCurrentContent());
  }
  return '';
};
