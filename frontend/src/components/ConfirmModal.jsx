import { AlertTriangle, X } from "lucide-react";

function ConfirmModal({
    title,
    message,
    onConfirm,
    onClose
}) {

    return (
        <div className="modal-backdrop">

            <div className="confirm-modal">

                <button
                    className="modal-close"
                    onClick={onClose}
                >
                    <X size={20} />
                </button>

                <div className="warning-icon">
                    <AlertTriangle size={22} />
                </div>

                <span className="eyebrow">
                    CONFIRM ACTION
                </span>

                <h2>
                    {title}
                </h2>

                <p>
                    {message}
                </p>

                <div className="confirm-actions">

                    <button
                        className="cancel-button"
                        onClick={onClose}
                    >
                        CANCEL
                    </button>

                    <button
                        className="delete-button"
                        onClick={onConfirm}
                    >
                        DELETE
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ConfirmModal;