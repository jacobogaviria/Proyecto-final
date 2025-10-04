from deep_translator import GoogleTranslator



def traducir_texto(idioma_entrada, texto_a_resumir, idioma_salida):
    traduccion = GoogleTranslator(source = idioma_entrada, target=idioma_salida).translate(texto_a_resumir)
    return traduccion