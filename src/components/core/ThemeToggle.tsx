import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { MatLightModeOutlined, MatDarkModeOutlined } from '@qwikest/icons/material';
import styles from "./ThemeToggle.css?inline";
 
export const ThemeToggle = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="flex items-center gap-3">
      <label class="switch">
        <input
          type="checkbox"
          id="hide-checkbox"
          onClick$={() => {
            const theme = document.documentElement.className;
            if (theme === "light") {
              document.documentElement.className = "dark";
              localStorage.setItem("theme", "dark");
            } else {
              document.documentElement.className = "light";
              localStorage.setItem("theme", "light");
            }
          }}
        />
        <span class="slider round">
          {/* Add Material icons inside the slider */}
          <span class="icon-container">
            <MatLightModeOutlined class="light-icon" />
            <MatDarkModeOutlined class="dark-icon" />
          </span>
        </span>
      </label>
    </div>
  );
});
