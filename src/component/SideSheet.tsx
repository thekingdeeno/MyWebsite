import { JSX, useEffect, useState } from 'react';
import './SideSheet.scss';
import { IoMdClose } from "react-icons/io";

export type SidesheetProps = {
  header?: string;
  hideCloseButton?: boolean;
  active: boolean;
  cancelBtn?: boolean;
  onClose: () => void;
  children: JSX.Element;
};

const SideSheet = ({ header, children, active, onClose, cancelBtn, hideCloseButton }: SidesheetProps) => {
  const closeSideSheet = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof HTMLElement && e.target.className === 'side-sheet') {
      setTransition(false);
      setTimeout(() => onClose(), 300);
    }
  };
  const [transition, setTransition] = useState<boolean>();
  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setTransition(true);
      }, 50);
    } else {
      setTimeout(() => {
        setTransition(false);
      }, 50);
    }
  }, [active]);

  return (
    <>
      {active && (
        <div
          className="side-sheet"
          onClick={closeSideSheet}
          {...(transition
            ? { style: { ...{ opacity: '1', zIndex: '1', transition: '500ms' } } }
            : { style: { ...{ opacity: '0', zIndex: '-1', transition: '500ms' } } })}
        >
          <div
            className="side-sheet-body"
            {...(transition
              ? { style: { ...{ right: '0px', transition: '1000ms' } } }
              : { style: { ...{ right: '-800px', transition: '1000ms' } } })}
          >
            <div className="head">
              {!hideCloseButton && (
                <button
                  className="close-button"
                  onClick={() => {
                    setTransition(false);
                    setTimeout(() => {
                      onClose();
                    }, 300);
                  }}
                >
                  <IoMdClose />

                </button>
              )}

              {header && <p>{header}</p>}
            </div>
            <div id="body">
              {children}
              {cancelBtn && (
                <div
                  className="cancel-button"
                  onClick={() => {
                    setTransition(false);
                    setTimeout(() => {
                      onClose();
                    }, 300);
                  }}
                >
                  <button>Cancel</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideSheet;
