TEX := resume.tex
OUT := output
PDF := $(OUT)/Lakshay_Maheshwari_Resume.pdf

.PHONY: all clean

all: $(PDF)

$(PDF): $(TEX) $(wildcard config/*.tex) $(wildcard sections/*.tex)
	@mkdir -p $(OUT)
	@if command -v tectonic >/dev/null 2>&1; then \
		echo "Building with Tectonic..."; \
		tectonic --keep-logs --outdir $(OUT) $(TEX) && mv $(OUT)/resume.pdf $(PDF); \
	elif command -v pdflatex >/dev/null 2>&1; then \
		echo "Building with pdflatex..."; \
		pdflatex -output-directory=$(OUT) $(TEX) && mv $(OUT)/resume.pdf $(PDF); \
	elif command -v xelatex >/dev/null 2>&1; then \
		echo "Building with xelatex..."; \
		xelatex -output-directory=$(OUT) $(TEX) && mv $(OUT)/resume.pdf $(PDF); \
	else \
		echo "No LaTeX engine found. Install Tectonic with: brew install tectonic"; \
		exit 1; \
	fi
	@echo "Built $(PDF) successfully."

clean:
	@find $(OUT) -type f ! -name '.gitkeep' ! -name '*.pdf' -delete 2>/dev/null || true
