import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Project } from "../types/project";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const media = project.media ?? [];

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const hasMedia = media.length > 0;
  const currentMedia = media[currentMediaIndex] ?? null;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (!hasMedia) return;

      if (e.key === "ArrowRight") {
        setCurrentMediaIndex((prev) =>
          prev === project.media!.length - 1 ? 0 : prev + 1
        );
      }

      if (e.key === "ArrowLeft") {
        setCurrentMediaIndex((prev) =>
          prev === 0 ? project.media!.length - 1 : prev - 1
        );
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, hasMedia, project.media]);

  const nextMedia = () => {
    if (!hasMedia) return;

    setCurrentMediaIndex((prev) =>
      prev === project.media!.length - 1 ? 0 : prev + 1
    );
  };

  const previousMedia = () => {
    if (!hasMedia) return;

    setCurrentMediaIndex((prev) =>
      prev === 0 ? project.media!.length - 1 : prev - 1
    );
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 text-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-white/10 p-8"
      >
        <div className="flex justify-between gap-4">
          <h2 className="text-2xl font-bold">{project.title}</h2>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {hasMedia && currentMedia && (
          <div className="mt-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/30">
              {currentMedia.type === "image" ? (
                <img
                  src={currentMedia.src}
                  alt={currentMedia.label ?? `${project.title} preview`}
                  className="w-full max-h-[520px] object-contain"
                />
              ) : (
                <video
                  controls
                  preload="metadata"
                  className="w-full max-h-[520px] object-contain"
                >
                  <source src={currentMedia.src} type="video/mp4" />
                </video>
              )}

              {project.media!.length > 1 && (
                <>
                  <button
                    onClick={previousMedia}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white"
                  >
                    ‹
                  </button>

                  <button
                    onClick={nextMedia}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {currentMedia.label && (
              <p className="mt-3 text-center text-sm text-gray-400">
                {currentMedia.label}
              </p>
            )}

            {project.media!.length > 1 && (
              <div className="mt-3 flex justify-center gap-2">
                {project.media!.map((item, index) => (
                  <button
                    key={item.src}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentMediaIndex === index
                        ? "w-8 bg-teal-400"
                        : "w-2.5 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Show ${item.label ?? `media ${index + 1}`}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <p className="mt-6 text-gray-300 leading-relaxed">
          {project.longDescription ?? project.description}
        </p>

        {project.highlights && (
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {project.highlights.map((item) => (
              <div
                key={item}
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300"
              >
                {item}
              </div>
            ))}
          </div>
        )}

        {project.demoLink && (
          <div className="mt-6">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm bg-teal-600 hover:bg-teal-500 px-4 py-2 rounded-full"
            >
              Live Demo
            </a>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}