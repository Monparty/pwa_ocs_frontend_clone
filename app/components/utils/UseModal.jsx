import { IconButton, Modal, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function UseModal({ open, onClose, header, children }) {
    return (
        <Modal open={open.isOpen} onClose={onClose}>
            <div className="w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center justify-between border-b border-gray-300 mb-2 pb-2">
                    <h2 className="text-lg">{header}</h2>
                    <Tooltip title="ปิด" enterDelay={500} onClick={onClose}>
                        <IconButton>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </div>
                <div className="p-2">{children}</div>
            </div>
        </Modal>
    );
}

export default UseModal;
