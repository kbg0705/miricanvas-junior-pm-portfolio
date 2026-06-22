import type { ProjectImage } from '../../types/project';

export function ImagePlaceholder(props: { image: ProjectImage; onOpen?: () => void }) {
  const { image, onOpen } = props;
  return (
    <button type="button" className="image-placeholder" onClick={onOpen}>
      <span>이미지 필요</span>
      <strong>{image.placeholderTitle}</strong>
      <p>{image.placeholderDescription}</p>
      <small>{image.aspectRatio}</small>
    </button>
  );
}
