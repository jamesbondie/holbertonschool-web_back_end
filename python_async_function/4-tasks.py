#!/usr/bin/env python3
import asyncio
task_wait_random = __import__('3-tasks').task_wait_random
"""
This module defines an asynchronous function that schedules multiple tasks
to wait for random delays and returns them in a sorted list.
"""


async def task_wait_n(n: int, max_delay: int):
    """
    Creates 'n' tasks to wait for random delays and returns a sorted list of these delays.
    """
    i = 0
    new_list = []
    while i < n:
        x = await task_wait_random(max_delay)
        new_list.append(x)
        i += 1

    return sorted(new_list)
