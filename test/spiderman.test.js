describe("Unit Tests for Spiderman class", () => {
    test('1) Create a spiderman object', () => {
      const AndrewGarfield = new Spiderman ("Amazing Spiderman", 31, "Andrew Garfield", 2, "Sony")
      expect(AndrewGarfield.name).toBe("Amazing Spiderman");
      expect(AndrewGarfield.age).toBe(31);
      expect(AndrewGarfield.actor).toBe("Andrew Garfield");
      expect(AndrewGarfield.movies).toBe(2);
      expect(AndrewGarfield.studio).toBe("sony");

    });
  })