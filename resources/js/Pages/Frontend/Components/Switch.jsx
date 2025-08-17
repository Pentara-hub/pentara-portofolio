import React, { useEffect, useId, useState } from "react";
import styled from "styled-components";
import { toggleTheme, isDarkNow } from "../../../utils/theme"; // keep as-is

const Switch = () => {
  const [checked, setChecked] = useState(false);
  const uid = useId();
  const inputId = `theme-switch-${uid}`;

  useEffect(() => {
    setChecked(isDarkNow());
  }, []);

  const handleChange = () => {
    toggleTheme();
    setChecked((prev) => !prev);
  };

  return (
    <StyledWrapper>
      <label className="switch" htmlFor={inputId}>
        <input
          id={inputId}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    display: block;
    --width-of-switch: 3.5em;
    --height-of-switch: 2em;
    --size-of-icon: 1.4em;
    --slider-offset: 0.3em;
    position: relative;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* ========= Track (LIGHT) ========= */
  .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #e9eaee;
    border-radius: 30px;
    transition: 0.4s;
    /* sunken + soft drop shadow (light) */
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.1),
      inset -2px -2px 6px rgba(255, 255, 255, 0.9),
      0 8px 14px rgba(0, 0, 0, 0.08);
  }

  /* subtle ambient glow used only in dark */
  .slider::after {
    content: "";
    position: absolute;
    left: 14%;
    right: 14%;
    bottom: -10px;
    height: 14px;
    border-radius: 9999px;
    filter: blur(12px);
    /* background: radial-gradient(ellipse at center, rgba(69, 245, 16, 1), transparent 60%);*/
    opacity: 0;
    transition: 0.35s ease;
    pointer-events: none;
  }

  /* ========= Knob (LIGHT) ========= */
  .slider:before {
    position: absolute;
    content: "";
    height: var(--size-of-icon, 1.4em);
    width: var(--size-of-icon, 1.4em);
    border-radius: 50%;
    left: var(--slider-offset, 0.3em);
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(40deg, #ffcc00, #ff8800 70%);
    transition: 0.4s;
    /* floating, rounded, bright */
    box-shadow: 0 10px 18px rgba(161, 92, 27, 0.59),
      inset -2px -2px 5px rgba(255, 255, 255, 0.75),
      inset 2px 2px 5px rgba(0, 0, 0, 0.15);
  }

  /* ========= Track (DARK) ========= */
  input:checked + .slider {
    background-color: #3a3d46;
    /* deeper sunken look + blue ambient */
    box-shadow: inset 4px 4px 9px rgba(0, 0, 0, 0.55),
      inset -4px -4px 9px rgba(255, 255, 255, 0.06),
      0 16px 28px rgba(80, 170, 255, 0.12), 0 3px 6px rgba(53, 154, 179, 0.18);
  }
  input:checked + .slider::after {
    opacity: 1;
  }

  /* ========= Knob (DARK) ========= */
  input:checked + .slider:before {
    left: calc(
      100% - (var(--size-of-icon, 1.4em) + var(--slider-offset, 0.3em))
    );
    background: #2e2e32; /* keep your moon base; icon/shape stays as you had */
    /* deeper drop + subtle inner rim highlights for 3D */
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.92),
      inset -3px -3px 6px rgba(255, 255, 255, 0.06),
      inset 3px 3px 7px rgba(0, 0, 0, 0.65), inset -3px -2px 5px -2px #8983f7,
      /* your crescent edge */ inset -10px -4px 0 0 #a3dafb; /* your crescent fill */
  }
`;

export default Switch;
