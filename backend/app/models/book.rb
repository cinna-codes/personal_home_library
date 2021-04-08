class Book < ApplicationRecord
    belongs_to :author, optional: true

    def author_name
        self.author.name
    end
end
