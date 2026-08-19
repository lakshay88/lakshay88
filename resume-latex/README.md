# Lakshay Maheshwari - LaTeX Resume

Modular, automated LaTeX resume setup for **Lakshay Maheshwari**.

## Structure

- `resume.tex`: Root LaTeX document
- `config/contact.tex`: Name and contact information
- `sections/`: Section templates (Summary, Skills, Experience, Projects, Education)
- `output/`: Compiled PDF output (`Lakshay_Maheshwari_Resume.pdf`)

## Build

Compile using `tectonic`:
```bash
make
```
The output PDF is automatically synced to `portfolio/public/resume.pdf` during the portfolio build.
