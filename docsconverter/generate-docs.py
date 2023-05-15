import os
import shutil
from mkdocs.config import config_options
from mkdocs.structure.nav import Section, Link
from mkdocs.commands.build import build


def generate_docs(source_dir, destination_dir):
    # Create a temporary directory to build the documentation
    tmp_dir = os.path.join(destination_dir, '.tmp')
    os.makedirs(tmp_dir, exist_ok=True)

    # Copy the source directory to the temporary directory
    shutil.copytree(source_dir, os.path.join(tmp_dir, 'docs'))

    # Generate a basic MkDocs configuration
    mkdocs_config = {
        'site_name': 'My Documentation',
        'docs_dir': 'docs',
        'site_dir': destination_dir,
        'nav': [
            {
                'Documentation': [
                    {'Home': 'index.md'}
                ]
            }
        ]
    }

    # Write the MkDocs configuration file
    config_path = os.path.join(tmp_dir, 'mkdocs.yml')
    with open(config_path, 'w') as config_file:
        for key, value in mkdocs_config.items():
            if key == 'nav':
                config_file.write(f'{key}:\n')
                for item in value:
                    for section, links in item.items():
                        config_file.write(f'  - {section}:\n')
                        for link in links:
                            for title, file_path in link.items():
                                config_file.write(f'    - {title}: {file_path}\n')
            else:
                config_file.write(f'{key}: {value}\n')

    # Build the documentation using MkDocs
    config_options.DEFAULT_CONFIG_PATH = config_path
    build()

    # Clean up the temporary directory
    shutil.rmtree(tmp_dir)


# Example usage:
generate_docs('./source', './destination')
