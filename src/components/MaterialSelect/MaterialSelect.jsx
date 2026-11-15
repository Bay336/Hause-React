import React, { useState, useRef, useEffect } from 'react';
import './MaterialSelect.scss';

export const MaterialSelect = ({ materials = [], selectedId, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const selectedItem =
    materials.find((m) => m.id === selectedId) || materials.at(0);

  // Закрытие списка при клике вне элемента
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id) => {
    onChange(id);
    setIsOpen(false);
  };

  return (
    <div className="custom-select" ref={selectRef}>
      <button
        type="button"
        className={`custom-select__trigger ${
          isOpen ? 'custom-select__trigger--open' : ''
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span>{selectedItem?.label || 'Выберите материал'}</span>
        <span className="custom-select__arrow" aria-hidden="true">
          ⌄
        </span>
      </button>

      {isOpen && (
        <ul className="custom-select__dropdown" role="listbox">
          {materials.map((mat) => {
            const isSelected = mat.id === selectedId;
            return (
              <li
                key={mat.id}
                role="option"
                aria-selected={isSelected}
                className={`custom-select__option ${
                  isSelected ? 'custom-select__option--selected' : ''
                }`}
                onClick={() => handleSelect(mat.id)}
              >
                {mat.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
