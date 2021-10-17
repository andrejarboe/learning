# Code references for myself

## [HTML & CSS - Simple/entry notes ](https://github.com/andrejarboe/learning/tree/main/html)

## ZSH setup:

`

    sudo apt update
    sudo apt install zsh -y
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

    git clone https://github.com/spaceship-prompt/spaceship-prompt.git  "$ZSH_CUSTOM/themes/spaceship-prompt" --depth=1

    ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme" 
`
    [install mononoki fonts from nerdfonts](https://www.nerdfonts.com/font-downloads)

`

    code ~/.zshrc

    line 11:
    ZSH_THEME="spaceship"

    last line:
    export LS_COLORS="di=34;40:ln=36;40:so=35;40:pi=33;40:ex=32;40:bd=1;33;40:cd=1;33;40:su=0;41:sg=0;43:tw=0;42:ow=34;40:"
zstyle ':completion:*:default' list-colors ${(s.:.)LS_COLORS}

`