"""
Simple streamlit app that helps do the grunt work of creating new formula pages.
On the first tab, input the formula name, latex, and sources, and it will generate a prompt for ChatGPT to generate the rest of the page.
On the second tab, paste the response from ChatGPT, and it will fix the latex formatting.
`pip install streamlit`
`streamlit run streamlit-app.py`
"""

import streamlit as st
import datetime

st.write("## stemformulas.com AI prompt generator")

# create two tabs, one for formatting the prompt, and one for formatting the response:

tabs = ["Prompt formatting", "Response formatting"]

prompt_tab, response_tab = st.tabs(tabs)

with prompt_tab:
    st.write("Enter the below information to generate a prompt for ChatGPT to generate most of the content for a new formula page.")
    example_text = r"""
    ---
    title: Thermal expansion
    description: "The thermal expansion formula."
    summary: "The thermal expansion formula."
    tags: ["physics", "material engineering"]
    date: 2023-07-03
    latex: \Delta L = L_0 \alpha \Delta T
    ---

    {{< katex >}}

    The thermal expansion formula is:

    $$ \Delta L = L_0 \alpha \Delta T $$

    Where

    * \\(\small \Delta L\\) is the change in length,
    * \\(\small L_0\\) is the initial length,
    * \\(\small \alpha\\) is the coefficient of linear expansion, and
    * \\(\small \Delta T\\) is the change in temperature in Kelvin.

    ## Sources

    - [Wikipedia](https://en.wikipedia.org/wiki/Thermal_expansion)
    - [Engineering Toolbox](https://www.engineeringtoolbox.com/linear-thermal-expansion-d_1379.html)
    """

    with st.form("Formula form"):
        formula_name = st.text_input("Formula name")

        date = datetime.datetime.now().strftime("%Y-%m-%d")

        latex = st.text_input("Latex")

        source1 = st.text_input("Source 1")

        source2 = st.text_input("Source 2")
        
        if st.form_submit_button("Submit"):
            st.write("Latex preview:")
            st.latex(latex)
            gpt_string = ""
            gpt_string += f"Format the following data: {formula_name=}, {date=}, {latex=}, {source1=}, {source2=} like this example\n"
            gpt_string += example_text
            st.text_area("Copy the following prompt into ChatGPT", value=gpt_string)

with response_tab:
    response_text: str = st.text_area("Enter the prompt response to fix latex formatting")
    if st.button("Submit"):
        # replace all '\(' with '\\( \small' and all '\)' w ith '\))'
        response_text = response_text.replace(r"\(", r"\\( \small ")
        response_text = response_text.replace(r"\)", r" \\)")
        st.text_area("Copy the following", value=response_text)