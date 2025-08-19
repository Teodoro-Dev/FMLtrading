# Migração para Tailwind CSS

## Resumo da Migração

Este projeto foi migrado de CSS customizado para Tailwind CSS, mantendo todas as funcionalidades e melhorando a organização do código.

## Principais Mudanças

### 1. Arquivo `index.css`
- Mantidas apenas as animações customizadas e estilos que não podem ser replicados com Tailwind
- Removidas classes CSS desnecessárias
- Mantidas as variáveis CSS para animações complexas

### 2. Componentes Atualizados
- **App.jsx**: Usa classes Tailwind para o container principal
- **Loading.jsx**: Migrado para Tailwind mantendo animações
- **Header.jsx**: Navegação responsiva com Tailwind
- **Hero.jsx**: Seção hero com gradientes e animações
- **Reveal.jsx**: Componente de animação simplificado

### 3. Configuração Tailwind (`tailwind.config.js`)
- Cores customizadas da marca
- Sombras com glow effects
- Animações customizadas
- Gradientes radiais
- Tamanhos customizados

## Classes Tailwind Principais

### Cores
- `bg-brand`, `bg-brand2` - Cores da marca
- `text-text`, `text-textSecondary`, `text-textMuted` - Cores de texto
- `bg-accent`, `bg-accent2`, etc. - Cores de destaque

### Efeitos
- `shadow-glow`, `shadow-glowStrong` - Sombras com glow
- `backdrop-blur-xl` - Efeito de blur
- `bg-glass`, `border-glassBorder` - Efeitos de vidro

### Animações
- `animate-fade-in`, `animate-slide-up` - Animações de entrada
- `animate-float`, `animate-pulse-glow` - Animações contínuas

### Layout
- `max-w-container` - Container principal
- `rounded-xl` - Border radius customizado
- `w-30`, `h-30` - Tamanhos customizados

## Como Usar

### 1. Componentes Básicos
```jsx
// Botão primário
<button className="px-6 py-3.5 rounded-full bg-gradient-to-br from-accent to-accent2 text-textOnBrand font-bold tracking-wider uppercase text-sm shadow-glow hover:shadow-glowStrong hover:-translate-y-0.5 transition-all duration-300">
  Botão
</button>

// Card com efeito glass
<div className="bg-surface border border-glassBorder rounded-xl p-6 backdrop-blur-xl hover:shadow-glow transition-all duration-300">
  Conteúdo
</div>
```

### 2. Animações
```jsx
// Animação de entrada
<div className="animate-fade-in">
  Conteúdo animado
</div>

// Animação contínua
<div className="animate-float">
  Elemento flutuante
</div>
```

### 3. Responsividade
```jsx
// Classes responsivas
<div className="text-2xl md:text-4xl lg:text-6xl">
  Texto responsivo
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  Grid responsivo
</div>
```

## Benefícios da Migração

1. **Performance**: Menos CSS para carregar
2. **Manutenibilidade**: Classes utilitárias consistentes
3. **Responsividade**: Sistema de breakpoints integrado
4. **Customização**: Configuração centralizada
5. **Produtividade**: Desenvolvimento mais rápido

## Próximos Passos

1. Migrar componentes restantes (About, Services, Pricing, etc.)
2. Otimizar animações para melhor performance
3. Adicionar mais variantes de componentes
4. Implementar tema escuro/claro se necessário

## Notas Importantes

- As animações customizadas foram mantidas no CSS para compatibilidade
- O sistema de cores foi preservado para manter a identidade visual
- Todos os efeitos de hover e transições foram mantidos
- A responsividade foi melhorada com classes Tailwind
