class CreateJoinTableArticleComment < ActiveRecord::Migration[5.0]
  def change
    create_join_table :articles, :comments, table_name: :everything
  end
end
