#!/usr/bin/env python3
"""Index range returner"""


def index_range(page: int, page_size: int) -> tuple:
    """Range of pages"""
    return ((page - 1) * page_size, (page - 1) * page_size + page_size)
