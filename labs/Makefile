BUILD=build
PREREQS=prince
TMP:=$(foreach exec,$(PREREQS),\
    $(if $(shell which $(exec)),,$(error Please install '$(exec)' first)))

ALLHTML=$(shell find . -name "*.html")
# http://stackoverflow.com/a/6145814/19530
FILTER_OUT=$(foreach v,$(2),$(if $(findstring $(1),$(v)),,$(v)))
# yay, OSX metadata files
ACTUALHTML=$(call FILTER_OUT,._,$(ALLHTML))
SOURCEDIRS=$(dir $(ACTUALHTML))
SOURCES=$(notdir $(ACTUALHTML)) 
vpath %.html $(SOURCEDIRS)

PDFS=$(SOURCES:%.html=$(BUILD)/%.pdf)

all: setup $(PDFS)

$(BUILD)/%.pdf: %.html *.css *.js
	prince --javascript $< --style=lab.css -o $@
	prince --javascript $< --style=solution.css -o $(basename $@)_solution.pdf

.PHONY: setup
setup:
	mkdir -p $(BUILD)

.PHONY: clean
clean:
	rm -rf $(BUILD)
