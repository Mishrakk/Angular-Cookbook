import os
import json


def find_package_names(start_dir):
    for root, dirs, files in os.walk(start_dir):
        # Exclude specific folders
        if "node_modules" in dirs:
            dirs.remove("node_modules")
        if ".git" in dirs:
            dirs.remove(".git")

        for file_name in files:
            if file_name == "package.json":
                file_path = os.path.join(root, file_name)
                project_dir_name = os.path.basename(root)
                with open(file_path, "r") as json_file:
                    try:
                        package_data = json.load(json_file)
                        package_name = package_data.get("name")
                        if package_name and package_name != project_dir_name:
                            print(f"{root}: {package_name}")
                    except json.JSONDecodeError:
                        print(f"Error decoding JSON in {file_path}")


# Start walking from the script's directory
script_directory = os.path.dirname(os.path.abspath(__file__))
find_package_names(script_directory)
