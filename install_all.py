import os
import subprocess

def find_matching_directories(root_dir):
    matching_dirs = []
    for root, dirs, _ in os.walk(root_dir):
        if os.path.basename(root) == "start_here":
            for dir_name in dirs:
                    matching_dirs.append(os.path.join(root, dir_name))
    return matching_dirs

def execute_npm_install(directory):
    try:
        subprocess.run(['C:\\Program Files\\nodejs\\npm.cmd', 'install'], cwd=directory, check=True)
        print(f"npm install completed in {directory}")
    except subprocess.CalledProcessError as e:
        print(f"npm install failed in {directory}: {e}")

if __name__ == "__main__":
    root_directory = os.path.dirname(os.path.abspath(__file__))

    matching_directories = find_matching_directories(root_directory)
    
    for dir_path in matching_directories:
        execute_npm_install(dir_path)
