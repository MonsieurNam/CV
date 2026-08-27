import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export type LightboxImage = {
  src: string;
  alt: string;
  rotate?: boolean;
};

type ImageLightboxProps = {
  image: LightboxImage | null;
  onClose: () => void;
};

export function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (image && !dialog.open) {
      dialog.showModal();
    } else if (!image && dialog.open) {
      dialog.close();
    }
  }, [image]);

  return (
    <dialog
      ref={dialogRef}
      className="image-lightbox"
      aria-label="Image preview"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {image ? (
        <div className="image-lightbox__content">
          <button
            type="button"
            aria-label="Close image preview"
            onClick={onClose}
            className="image-lightbox__close inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#032534]/80 text-white shadow-xl backdrop-blur-md transition-colors hover:bg-[#032534] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
          <img
            src={image.src}
            alt={image.alt}
            className={`image-lightbox__image object-contain ${image.rotate ? "image-lightbox__image--rotated" : ""}`}
          />
        </div>
      ) : null}
    </dialog>
  );
}
