import React, { useState, useEffect, useRef } from 'react';
import './Filter.scss'; // Убедитесь, что путь до вашего SCSS-файла верный

const MATERIAL_OPTIONS = [
  { value: 'all', label: 'Любой материал' },
  { value: 'Каркас', label: 'Каркас' },
  { value: 'Брус', label: 'Брус' },
  { value: 'Газобетон', label: 'Газобетон' },
  { value: 'Кирпич', label: 'Кирпич' },
];

const AREA_OPTIONS = [
  { value: 'all', label: 'Любая площадь' },
  { value: 'under-100', label: 'До 100 м²' },
  { value: '100-150', label: '100 – 150 м²' },
  { value: '150-200', label: '150 – 200 м²' },
  { value: 'over-200', label: 'От 200 м²' },
];

const Filter = ({
  selectedMaterial,
  setSelectedMaterial,
  selectedArea,
  setSelectedArea,
  totalCount = 0,
}) => {
  // Храним, какой именно список сейчас открыт: 'material', 'area' или null
  const [openDropdown, setOpenDropdown] = useState(null);
  const filtersRef = useRef(null);

  // Закрываем меню при клике вне блока фильтров
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filtersRef.current && !filtersRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getPluralHouses = (count) => {
    const mod10 = count % 10;
    const mod100 = count % 100;

    if (mod10 === 1 && mod100 !== 11) return `${count} дом`;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
      return `${count} дома`;
    }
    return `${count} домов`;
  };

  // Получаем текст для выбранных пунктов
  const currentMaterialLabel =
    MATERIAL_OPTIONS.find((opt) => opt.value === selectedMaterial)?.label || 'Любой материал';
  const currentAreaLabel =
    AREA_OPTIONS.find((opt) => opt.value === selectedArea)?.label || 'Любая площадь';

  return (
    <section className="catalog-filters" aria-label="Фильтр проектов">
      <div className="container catalog-filters__inner">
        <div className="catalog-filters__controls" ref={filtersRef}>
          <span className="catalog-filters__label">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sliders-horizontal h-4 w-4" aria-hidden="true"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg> Подобрать дом:
          </span>

          {/* 1. Кастомный селект материалов */}
          <div className="custom-select">
            <button
              type="button"
              className={`custom-select__trigger ${openDropdown === 'material' ? 'active' : ''}`}
              onClick={() => setOpenDropdown(openDropdown === 'material' ? null : 'material')}
              aria-expanded={openDropdown === 'material'}
            >
              <span>{currentMaterialLabel}</span>
              <svg
                className={`custom-select__arrow ${openDropdown === 'material' ? 'open' : ''}`}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {openDropdown === 'material' && (
              <ul className="custom-select__menu" role="listbox">
                {MATERIAL_OPTIONS.map((option) => (
                  <li
                    key={option.value}
                    role="option"
                    aria-selected={selectedMaterial === option.value}
                    className={`custom-select__option ${
                      selectedMaterial === option.value ? 'selected' : ''
                    }`}
                    onClick={() => {
                      setSelectedMaterial(option.value);
                      setOpenDropdown(null);
                    }}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* 2. Кастомный селект площади */}
          <div className="custom-select">
            <button
              type="button"
              className={`custom-select__trigger ${openDropdown === 'area' ? 'active' : ''}`}
              onClick={() => setOpenDropdown(openDropdown === 'area' ? null : 'area')}
              aria-expanded={openDropdown === 'area'}
            >
              <span>{currentAreaLabel}</span>
              <svg
                className={`custom-select__arrow ${openDropdown === 'area' ? 'open' : ''}`}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {openDropdown === 'area' && (
              <ul className="custom-select__menu" role="listbox">
                {AREA_OPTIONS.map((option) => (
                  <li
                    key={option.value}
                    role="option"
                    aria-selected={selectedArea === option.value}
                    className={`custom-select__option ${
                      selectedArea === option.value ? 'selected' : ''
                    }`}
                    onClick={() => {
                      setSelectedArea(option.value);
                      setOpenDropdown(null);
                    }}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="catalog-filters__count">
          Найдено: <span>{getPluralHouses(totalCount)}</span>
        </div>
      </div>
    </section>
  );
};

export default Filter;

