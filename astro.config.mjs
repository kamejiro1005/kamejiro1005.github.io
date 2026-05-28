// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // 1. 公開先のURL（自分のGitHubのURL）
    site: 'https://kamejiro1005.github.io/.github.io/', 

    // 2. リポジトリ名（例：my-astro-site）
    // これを書かないと、画像やスタイルが読み込まれず真っ白になります！
    base: '/',
});
