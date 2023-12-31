/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

import './editor.scss';

const onChangeContent = (val) => {
  setAttributes({ content: val });
};

export default function Edit({ attributes, setAttributes }) {
  return (
    <RichText
      {...useBlockProps()}
      tagName="p"
      onChange={onChangeContent}
      value={attributes.content}
      placeholder="Enter some text here..."
    />
  );
}
