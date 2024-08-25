import csv
import math
from typing import List


def index_range(page: int, page_size: int) -> tuple:
    """Range of pages"""
    return (page - 1) * page_size, (page - 1) * page_size + page_size


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Page returner"""
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        range = index_range(page, page_size)
        page = self.dataset()
        return page[range[0]:range[1]]
