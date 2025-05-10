# Document Verification System

## Overview

A robust pipeline for verifying user identities by integrating machine learning models for document classification, OCR-based text extraction, text similarity, and face recognition. The system processes submitted documents and live images to confirm authenticity and user identity.

## Features

* **Document Classification**: Categorizes input images into types (e.g., Citizenship Front/Back, ID Card).
* **OCR Extraction**: Extracts textual data from documents using the TrOCR model.
* **Text Similarity**: Compares extracted text against user-provided information.
* **Face Recognition**: Verifies user identity by matching live-captured face against document photo.
* **End-to-End Web App**: Seamless integration of front-end, back-end, and ML inference, including YOLO for document detection.

## Project Structure

```
├── training_evaluation
│   ├── ocr
│   │   ├── ocrdataset/        # Synthetic data generation scripts
│   │   ├── kaggle_nepali_train/# TrOCR fine-tuning notebooks
│   │   └── cer.ipynb           # CER evaluation script
│   └── document_classifier
│       └── training.ipynb     # ResNet50 classification notebooks
├── training_evaluation/inference
│   ├── inference.py           # Entry script for model inference
│   └── requirements.txt
├── frontend_backend            # Django-based web application
│   ├── static/                # CSS, JS, images, Bootstrap assets
│   ├── templates/             # HTML templates
│   └── manage.py
└── Major_Project.pdf          # Full project report
```

## Technologies Used

* **Front-end:** HTML, CSS, JavaScript, Bootstrap
* **Back-end:** Python, Django, dlib, YOLO
* **OCR & ML:** Hugging Face Transformers (TrOCR), PyTorch, ResNet50, face\_recognition

## Setup and Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ganesh-786/document-verification-system.git
   cd document-verification-system
   ```
2. **Install Python dependencies**

   ```bash
   pip install -r training_evaluation/inference/requirements.txt
   pip install dlib/<appropriate-version>
   ```
3. **Download Pre-trained Models**

   * TrOCR: place under `training_evaluation/inference/models/trocr/part_3/`
   * ResNet50 classifier: place under `training_evaluation/inference/models/document_classifier/`
4. **Set up Web App**

   ```bash
   cd frontend_backend
   pip install -r requirements.txt
   python manage.py migrate
   ```

## Usage

1. **Start the inference service** (if separate)

   ```bash
   python training_evaluation/inference/inference.py
   ```
2. **Launch web application**

   ```bash
   cd frontend_backend
   python manage.py runserver
   ```
3. **Access**: Open `http://localhost:8000` in your browser to upload documents and perform verification.

## Contribution

We welcome contributions! To get started:

1. Fork the repository
2. Create a feature branch:

   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:

   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your branch:

   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

* **Repository:** [https://github.com/ganesh-786/ganesh-786.github.io](https://github.com/ganesh-786/document-verification-system)
* **Maintainer:** Ganesh Chaudhary (Front-end Developer)

  * User interface: HTML, CSS, JavaScript, Bootstrap
  * Mobile-responsive design
  * Front-end optimization and performance
  * Integrated front-end, back-end, and YOLO into a unified workflow
* **Email:** [ganesh98245.np@gmail.com](mailto:your-email@example.com)
