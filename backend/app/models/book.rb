class Book < ApplicationRecord
    belongs_to :author

    def author_name
        self.author.name
    end
end
