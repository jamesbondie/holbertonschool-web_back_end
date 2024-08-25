#!/usr/bin/env python3
"""Simple helper function module"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Range of pages"""
    return ((page - 1) * page_size, page * page_size)
