// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Frontend {
    uint256 private value;


    // Function to get the value
    function get() public view returns (uint256) {
        return value;
    }

    // Function to increment the value
    function increment() public {
        value += 1;
    }

     function decrement() public {
        value -= 1;
    }
}
