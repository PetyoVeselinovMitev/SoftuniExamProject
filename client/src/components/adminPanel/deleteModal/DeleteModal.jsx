import React from 'react';
import './DeleteModal.css';

export default function DeleteModal({ show, onClose, onConfirm, movie }) {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Confirm Delete</h2>
                <p>{`Are you sure you want to delete "${movie[0].movie.title}"?`}</p>
                <div className="modal-actions">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={onConfirm}>Delete</button>
                </div>
            </div>
        </div>
    );
}