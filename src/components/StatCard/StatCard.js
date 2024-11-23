import React, { useState, useEffect, useRef } from "react";
import "./StatCard.css";

function StatCard({ number, label, extraStyle, isDecimal = false, showPlusSign=true }) {
  const [count, setCount] = useState(0); // Estado para el conteo
  const [isVisible, setIsVisible] = useState(false); // Estado para visibilidad
  const statRef = useRef(); // Referencia al elemento

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Marca como visible cuando la sección aparece en el viewport
        }
      },
      { threshold: 0.5 } // Al menos el 50% del elemento debe ser visible
    );

    if (statRef.current) {
      observer.observe(statRef.current); // Observa el elemento
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current); // Limpia el observador al desmontar
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 1800; // Duración del conteo en milisegundos
      const increment = number / (duration / 50); // Incremento calculado

      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount + increment >= number) {
            clearInterval(interval); // Detiene el conteo
            return number; // Asegura el número final exacto
          }
          return prevCount + increment;
        });
      }, 50); // Intervalo de actualización

      return () => clearInterval(interval); // Limpia el intervalo
    }
  }, [isVisible, number]);

  return (
    <div
      ref={statRef}
      className={`circle-container ${extraStyle ? extraStyle : ""}`}
    >
      <p className="circle-number">
        {isDecimal ? count.toFixed(1) : Math.floor(count)}{showPlusSign ? " +" : null}
      </p>
      <p className="circle-label">{label}</p>
    </div>
  );
}

export default StatCard;
