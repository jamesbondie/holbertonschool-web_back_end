#!/usr/bin/env python3
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random
"""
This module provides a function to create an asyncio Task that runs wait_random.
"""


def task_wait_random(max_delay: int):
    """
    Creates and returns an asyncio Task for the wait_random coroutine.
    """
    return asyncio.Task(wait_random(max_delay))
