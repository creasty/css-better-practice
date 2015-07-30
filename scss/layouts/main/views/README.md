Views
=====

このディレクトリでは、ページ固有のスタイルを管理します。

ページ単位でディレクトリやファイルを作り、特定のページに閉じたスタイルを適応していきます。

構造のルールは、Rails の `app/views` ディレクトリに似ています。

- 特定の controller の全体で (すべての action で) 共有のものは、  
  controller 名のファイルを作ります。e.g., `./posts.scss`
- 特定の controller の action について共有のものは、  
  controller 名のディレクトリを切りその中に action 名のファイルを作ります。e.g., `./posts/index.scss`

また、各ファイルは必ず、ページ固有のスコープで囲われている必要があります。  
今回は記述を簡単にするために `page-scope` mixin を用意してあります。
