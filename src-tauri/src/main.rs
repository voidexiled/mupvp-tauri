// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
  )]
  
  use tauri::Manager;
  use window_vibrancy::{apply_blur, apply_vibrancy, apply_tabbed, NSVisualEffectMaterial};
  use window_shadows::set_shadow;

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();

            // window shadows
            set_shadow(&window, true).unwrap();


        Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
