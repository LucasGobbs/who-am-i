---
title: "Do fullstack para a computação gráfica, parte 1: um raytracer em Odin"
description: "Primeira parte de uma série sobre sair do backend para estudar computação gráfica. Esta parte é um raytracer de CPU em Odin: o que ele renderiza, em quanto tempo, e um erro de performance honesto."
date: 2026-09-19
tags:
  - graphics
  - odin
  - development
interest: development
draft: true
---

Passei os últimos cinco anos trabalhando com backend e fullstack: Node, Go,
Java, o pacote usual. Este ano decidi mudar de rumo para computação gráfica, e
esta série é o diário dessa mudança. Cada parte é um artefato e o que eu
aprendi construindo ele.

A primeira parte é um raytracer de CPU escrito em [Odin](https://odin-lang.org/).
Odin é uma linguagem de sistemas pequena, próxima do C em espírito. Quase
ninguém contrata para ela, e mesmo assim eu a escolhi: os algoritmos, o layout
de memória e o hábito de medir são o currículo de verdade. Informação em C++
eu leio e traduzo bem quando um livro ou artigo usa a linguagem. Já tinha
feito um raytracer de brinquedo em Rust antes, o que ajudou.

O tracer segue a série gratuita de livros [Ray Tracing in One
Weekend](https://raytracing.github.io/). Neste ponto ele renderiza materiais
difusos, de metal e de vidro, simula profundidade de campo da câmera
amostrando raios em um disco na lente, intersecta quadriláteros além de
esferas e monta a geometria da Cornell Box. Para manter cenas grandes rápidas,
os raios primeiro testam uma bounding volume hierarchy, uma árvore de caixas
alinhadas aos eixos que descarta grupos de objetos que o raio não pode atingir
em vez de testar um por um. O motion blur é um timestamp em cada raio; as
esferas em movimento varrem suas caixas.

A parte de que tenho mais orgulho é o ciclo de medição. Um modo headless, sem
editor, renderiza uma cena direto do JSON de configuração dela e adiciona uma
linha a um CSV: resolução, samples por pixel, profundidade de bounce, threads,
tempo mediano em N execuções e o arquivo da imagem. Hoje a cena complexa
(cerca de cem esferas aleatórias em um chão espelhado, 250x140 pixels, 100
samples por pixel, no máximo 50 bounces) renderiza em cerca de 600
milissegundos na minha máquina. Dado os primeiros números que eu tinha a uma
profundidade cinco vezes menor, considero um bom resultado, e o histórico do
CSV deixa a alegação verificável em vez de uma mera impressão.

Ela também capturou um erro feio meu. Quando adicionei contadores de raios,
testes de interseção e visitas a nós usando incrementos atômicos compartilhados,
o render foi de 0,6 segundos para cerca de 16. Cerca de 450 milhões de
operações atômicas por render brigavam pelas mesmas três linhas de cache. A
correção foi remover a funcionalidade, não otimizá-la. Se esses números um
dia valerem o custo, o formato certo é um contador local por partição de
threads, somado uma única vez no fim.

Fonte: [github.com/LucasGobbs/toy_raytracer_odin](https://github.com/LucasGobbs/toy_raytracer_odin).

Depois: materiais emissivos, porque a Cornell Box hoje finge ser iluminada por
um teto Lambertiano branco. Na sequência, texturas, e em seguida volumes.
