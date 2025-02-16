![GitHub contributors](https://img.shields.io/github/contributors/selimyilbas/Secure-Vault)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-cyan)
![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-pink)
![Python](https://img.shields.io/badge/python-3-yellow)
![GitHub Repo Size](https://img.shields.io/github/repo-size/selimyilbas/Secure-Vault)
![GitHub last commit](https://img.shields.io/github/last-commit/selimyilbas/Secure-Vault)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Tech Stack](https://img.shields.io/badge/tech-stack-blueviolet)

# Secure Vault

Secure Vault is a Python based file management system that combines **AES-256** encryption for data security and **SHA hashing** for ensuring data integrity. Designed to protect sensitive files, it offers advanced encryption techniques and features a user-friendly graphical interface, making secure file storage and management both efficient and accessible.




## Table of Contents
- [Features](#features)
- [How to Run](#how-to-run)
- [Usage](#usage)
- [Technologies Used](#technologies-used)


## Project Motivation
The Secure Vault project was developed as a practical implementation of encryption and secure file management techniques. It emphasizes privacy and data integrity, making it ideal for anyone needing a simple and secure way to manage sensitive files.



  ## Technologies Used
- **Python**: Programming language.
- **Tkinter**: For the graphical user interface (GUI).
- **Pillow**: For image processing.
- **Cryptography**: For AES-256 encryption and SHA hashing.
- **PBKDF2**: For password-based key derivation.
- **Git**: Version control.



## Features

-> **Create Encrypted Vaults:** Users can create vaults with a password to securely store files.

![Kapture 2025-02-04 at 03 24 13 03 31 02](https://github.com/user-attachments/assets/9e07b2a7-ca5d-4a84-bb9b-8103c0d324b2)

-> **File Encryption:** Files are encrypted when added to the vault, ensuring their security.

![Kapture 2025-02-04 at 01 48 20](https://github.com/user-attachments/assets/55431aeb-fbc0-4d2a-a0ab-c50d723c7809)

-> **File Management:** Add, list, remove, and extract files from the vault through the graphical interface.

![Kapture 2025-02-04 at 01 44 02](https://github.com/user-attachments/assets/b8c53b6c-cbb2-4acb-a0f4-fc779cbc951c)

-> **Integrity Check:** Ensures that files are not tampered with inside the vault.

![Kapture 2025-02-04 at 03 32 56](https://github.com/user-attachments/assets/9ad0fbc6-416f-4feb-8164-8c5d7a70852a)

-> **Metadata Handling:** Securely stores file metadata, such as file offsets, sizes, and hashes.

-> **Padding for Security:** Vault files are padded to hide their true size, improving security.

-> **Graphical User Interface (GUI):** Built with Tkinter, the GUI provides a user-friendly experience.


## How to Run

Follow these steps to set up and run the Secure Vault project:

### 1. Clone the Repository
```bash
git clone https://github.com/selimyilbas/secure-vault.git
cd secure-vault
```


### 2. Set Up a Virtual Environment

Create a virtual environment to manage dependencies:

```
python3 -m venv venv
```


Activate the virtual environment:

On macOS/Linux:

```
source venv/bin/activate
```

On Windows:

```
venv\Scripts\activate
```

### 3. Install Dependencies
Install the required Python libraries:

```
pip install pillow
pip install cryptography
```

### 4. Run the Application
   
Start the Secure Vault GUI:

```
python3 gui.py
```

## Usage

-> **Create a Vault:** Enter a vault path and password, then click "Create Vault."

-> **Open a Vault:** Use the same vault path and password to access an existing vault.

-> **Add Files:** Add files to the vault for encryption.

-> **Extract Files:** Extract encrypted files back to their original state.

-> **Lock Vault:** Securely lock the vault when you're done.

-> **Exit the Application**

-> Simply close the GUI window to exit.



* * *
* * * **Cypherpunk**
* * *




